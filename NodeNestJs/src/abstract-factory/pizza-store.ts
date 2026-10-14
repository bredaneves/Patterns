/* É a mesma PizzaStore do Factory Method. Os dois padrões convivem: 
o Factory Method decide a pizza, e o Abstract Factory entrega os ingredientes. */

import { Pizza } from './pizza';

export type PizzaType = 'cheese';

export abstract class PizzaStore {
  orderPizza(type: PizzaType): Pizza {
    const pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }

  protected abstract createPizza(type: PizzaType): Pizza;
}
