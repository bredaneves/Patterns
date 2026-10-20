/* Passo 4: os comandos concretos 

Três pontos:

O ClearCartCommand guarda o estado anterior no execute(), porque sem isso o undo() não teria o que restaurar. 
Esta é a regra geral: o comando precisa lembrar de tudo o que for necessário para desfazer.
O AddItemCommand.undo() usa removeLast(), o que só está correto porque o desfazer acontece em ordem inversa, 
do último comando para o primeiro. Quem garante isso é o invoker (próximo passo).
O MacroCommand é um comando feito de comandos. Ele desfaz em ordem reversa, e é a mesma forma recursiva que 
você usou no Composite.
*/

import { Cart, CartItem } from './cart';
import { Command } from './command';

export class AddItemCommand implements Command {
  readonly description: string;

  constructor(
    private readonly cart: Cart,
    private readonly item: CartItem,
  ) {
    this.description = `Adicionar ${item.name}`;
  }

  execute(): void {
    this.cart.add(this.item);
  }

  undo(): void {
    this.cart.removeLast();
  }
}

export class ClearCartCommand implements Command {
  readonly description = 'Esvaziar carrinho';
  private backup: CartItem[] = [];

  constructor(private readonly cart: Cart) {}

  execute(): void {
    this.backup = this.cart.snapshot();
    this.cart.clear();
  }

  undo(): void {
    this.cart.restore(this.backup);
  }
}

export class MacroCommand implements Command {
  constructor(
    readonly description: string,
    private readonly commands: Command[],
  ) {}

  execute(): void {
    this.commands.forEach((c) => c.execute());
  }

  undo(): void {
    [...this.commands].reverse().forEach((c) => c.undo());
  }
}
