/* Passo 2: o receiver 
O Cart é o objeto que faz o trabalho de verdade e não sabe que existem comandos.
*/

export interface CartItem {
  name: string;
  priceInCents: number;
}

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

export class Cart {
  private items: CartItem[] = [];

  add(item: CartItem): void {
    this.items.push(item);
  }

  removeLast(): CartItem | undefined {
    return this.items.pop();
  }

  snapshot(): CartItem[] {
    return [...this.items];
  }

  restore(items: CartItem[]): void {
    this.items = [...items];
  }

  clear(): void {
    this.items = [];
  }

  print(): void {
    if (this.items.length === 0) {
      console.log('Carrinho vazio');
      return;
    }
    const total = this.items.reduce((sum, i) => sum + i.priceInCents, 0);
    const names = this.items.map((i) => i.name).join(', ');
    console.log(`Carrinho (${this.items.length}): ${names} - ${brl.format(total / 100)}`);
  }
}
