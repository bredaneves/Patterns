/* as fábricas concretas */

import { PizzaIngredientFactory } from './ingredient-factory';
import {
  Dough, Sauce, Cheese,
  ThinCrustDough, ThickCrustDough,
  MarinaraSauce, PlumTomatoSauce,
  ReggianoCheese, MozzarellaCheese,
} from './ingredients';

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough { return new ThinCrustDough(); }
  createSauce(): Sauce { return new MarinaraSauce(); }
  createCheese(): Cheese { return new ReggianoCheese(); }
}

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  createDough(): Dough { return new ThickCrustDough(); }
  createSauce(): Sauce { return new PlumTomatoSauce(); }
  createCheese(): Cheese { return new MozzarellaCheese(); }
}
