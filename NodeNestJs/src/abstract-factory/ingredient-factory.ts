
/* a fábrica abstrata */

import { Dough, Sauce, Cheese } from './ingredients';

export interface PizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
}
