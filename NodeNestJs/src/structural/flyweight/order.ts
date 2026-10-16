/* Passo 4: o contexto, com o estado extrínseco 
O pedido guarda o que é só dele (id, table, size) e aponta para o tipo compartilhado.
*/

import { PizzaType } from './pizza-type';

export type PizzaSize = 'small' | 'medium' | 'large';

const SIZE_PERCENT: Record<PizzaSize, number> = { small: 80, medium: 100, large: 130 };

export class Order {
  constructor(
    public readonly id: number,
    public readonly table: number,
    public readonly size: PizzaSize,
    public readonly type: PizzaType, // referência ao flyweight, não uma cópia
  ) {}

  getPriceInCents(): number {
    return Math.round((this.type.basePriceInCents * SIZE_PERCENT[this.size]) / 100);
  }

  describe(): string {
    return `Pedido #${this.id} (mesa ${this.table}): ${this.type.name} ${this.size}, ${this.type.toppings.join(' + ')}`;
  }
}
