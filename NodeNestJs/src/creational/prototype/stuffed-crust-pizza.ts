/* uma subclasse 
   Cada classe sabe se clonar. Isso permite que o cliente clone uma pizza sem
   saber qual é a classe concreta, que é a vantagem real sobre um new Pizza(...) espalhado pelo código.
*/

import { Pizza, PizzaSize, Dough } from './pizza';

export class StuffedCrustPizza extends Pizza {
  constructor(
    name: string,
    size: PizzaSize,
    toppings: string[],
    dough: Dough,
    public stuffing: string,
  ) {
    super(name, size, toppings, dough);
  }

  /* se comentarmos esse método, o recheio da pizza não será clonado */
  override clone(): StuffedCrustPizza {
    return new StuffedCrustPizza(
      this.name, this.size, [...this.toppings], { ...this.dough }, this.stuffing,
    );
  }

  override describe(): string {
    return `${super.describe()} + ${this.stuffing} stuffing`;
  }
}
