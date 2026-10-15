/* o cliente 
A loja só conhece PaymentProcessor. Ela não sabe se por trás há um SDK moderno ou um gateway legado.*/

import { PaymentProcessor } from './payment-processor';

export class PizzaStore {
  constructor(private readonly payment: PaymentProcessor) {}

  async checkout(pizza: string, price: number): Promise<void> {
    const paid = await this.payment.pay(price);
    console.log(paid ? `Pago: ${pizza} (R$ ${price})` : `Recusado: ${pizza} (R$ ${price})`);
  }
}
