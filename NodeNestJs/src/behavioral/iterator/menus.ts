/* Passo 3: as coleções e seus iteradores 

Este é o coração do padrão, com três pontos:

O estado do percurso mora no iterador, e não na coleção: o index de um, o current do outro. 
Por isso dois iteradores sobre o mesmo cardápio andam de forma independente.
Quem usa só vê hasNext/next. Se o cardápio trocar de array para árvore, o código do garçom não muda.
Os if (item === undefined) e if (!node) são o tratamento do | undefined que o seu tsconfig exige, 
e viram o erro de “fim da coleção” quando alguém chama next() sem checar o hasNext().
*/

import { Menu, MenuItem, MenuIterator } from './menu-iterator';

// --- Cardápio da casa: guarda os itens num array ---

class ArrayMenuIterator implements MenuIterator<MenuItem> {
  private index = 0;

  constructor(private readonly items: readonly MenuItem[]) {}

  hasNext(): boolean {
    return this.index < this.items.length;
  }

  next(): MenuItem {
    const item = this.items[this.index];
    if (item === undefined) throw new Error('Fim da coleção');
    this.index += 1;
    return item;
  }
}

export class ArrayMenu implements Menu {
  private readonly items: MenuItem[] = [];

  add(item: MenuItem): this {
    this.items.push(item);
    return this;
  }

  createIterator(): MenuIterator<MenuItem> {
    return new ArrayMenuIterator(this.items);
  }

  *[Symbol.iterator](): Generator<MenuItem> {
    for (const item of this.items) yield item;
  }
}

// --- Cardápio novo: guarda os itens numa lista encadeada ---

interface Node {
  item: MenuItem;
  next: Node | undefined;
}

class LinkedMenuIterator implements MenuIterator<MenuItem> {
  constructor(private current: Node | undefined) {}

  hasNext(): boolean {
    return this.current !== undefined;
  }

  next(): MenuItem {
    const node = this.current;
    if (!node) throw new Error('Fim da coleção');
    this.current = node.next;
    return node.item;
  }
}

export class LinkedMenu implements Menu {
  private head: Node | undefined;
  private tail: Node | undefined;

  add(item: MenuItem): this {
    const node: Node = { item, next: undefined };
    if (this.tail) {
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
    return this;
  }

  createIterator(): MenuIterator<MenuItem> {
    return new LinkedMenuIterator(this.head);
  }

  *[Symbol.iterator](): Generator<MenuItem> {
    for (let node = this.head; node; node = node.next) yield node.item;
  }
}
