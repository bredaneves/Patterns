/* quem usa */

import { OrderSequence } from './order-sequence';

export class PizzaStore {
  constructor(private readonly city: string) {}

  placeOrder(pizza: string): void {
    const number = OrderSequence.getInstance().next();
    console.log(`[${this.city}] Pedido #${number}: ${pizza}`);
  }
}
