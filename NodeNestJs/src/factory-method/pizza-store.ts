/* Este é o coração do padrão */

import { Pizza } from './pizza';

export type PizzaType = 'cheese' | 'pepperoni';

export abstract class PizzaStore {
  orderPizza(type: PizzaType): Pizza {
    const pizza = this.createPizza(type);   // <- o factory method
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }

  protected abstract createPizza(type: PizzaType): Pizza;
}
