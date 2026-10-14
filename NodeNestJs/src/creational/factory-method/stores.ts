/* criadores concretos */

import { PizzaStore, PizzaType } from './pizza-store';
import { Pizza } from './pizza';
import { NYStyleCheesePizza, ChicagoStyleCheesePizza } from './pizzas';

export class NYPizzaStore extends PizzaStore {
  protected createPizza(type: PizzaType): Pizza {
    switch (type) {
      case 'cheese': return new NYStyleCheesePizza();
      case 'pepperoni': throw new Error('Ainda não implementado');
    }
  }
}

export class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(type: PizzaType): Pizza {
    switch (type) {
      case 'cheese': return new ChicagoStyleCheesePizza();
      case 'pepperoni': throw new Error('Ainda não implementado');
    }
  }
}
