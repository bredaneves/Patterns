/* as lojas concretas */

import { PizzaStore, PizzaType } from './pizza-store';
import { Pizza } from './pizza';
import { CheesePizza } from './cheese-pizza';
import {
  NYPizzaIngredientFactory,
  ChicagoPizzaIngredientFactory,
} from './ingredient-factories';

export class NYPizzaStore extends PizzaStore {
  protected createPizza(type: PizzaType): Pizza {
    const factory = new NYPizzaIngredientFactory();
    switch (type) {
      case 'cheese':
        return new CheesePizza('New York Style Cheese Pizza', factory);
    }
  }
}

export class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(type: PizzaType): Pizza {
    const factory = new ChicagoPizzaIngredientFactory();
    switch (type) {
      case 'cheese':
        return new CheesePizza('Chicago Style Cheese Pizza', factory);
    }
  }
}
