/* Este é o ponto central: a pizza não sabe qual região está usando, só pede os ingredientes à fábrica. */

import { Pizza } from './pizza';
import { PizzaIngredientFactory } from './ingredient-factory';

export class CheesePizza extends Pizza {
  constructor(
    name: string,
    private readonly ingredientFactory: PizzaIngredientFactory,
  ) {
    super(name);
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`);
    this.dough = this.ingredientFactory.createDough();
    this.sauce = this.ingredientFactory.createSauce();
    this.cheese = this.ingredientFactory.createCheese();
    console.log(`  ${this.dough.name}, ${this.sauce.name}, ${this.cheese.name}`);
  }
}
