/* o Director com as receitas 
O Director só conhece a interface PizzaBuilder. 
Ele não sabe se está gerando um objeto ou um texto, 
e é isso que permite reaproveitar a mesma receita nos dois builders.*/

import { PizzaBuilder } from './pizza-builder';
import { PizzaSize } from './pizza';

export class PizzaDirector {
  makeMargherita(builder: PizzaBuilder, size: PizzaSize = 'medium'): void {
    builder.reset();
    builder.setSize(size);
    builder.setDough('Thin Crust Dough');
    builder.setSauce('Tomato Sauce');
    builder.addTopping('Mozzarella');
    builder.addTopping('Basil');
  }

  makePepperoni(builder: PizzaBuilder, size: PizzaSize = 'large'): void {
    builder.reset();
    builder.setSize(size);
    builder.setDough('Thick Crust Dough');
    builder.setSauce('Spicy Tomato Sauce');
    builder.addTopping('Pepperoni');
    builder.setExtraCheese(true);
  }

  // challenge: receita de pizza vegetariana
  makeVeggie(builder: PizzaBuilder, size: PizzaSize = 'small'): void {
    builder.reset();
    builder.setSize(size);
    builder.setDough('Whole Wheat Dough');
    builder.setSauce('Pesto Sauce');
    builder.addTopping('Bell Peppers');
    builder.addTopping('Olives');
    builder.addTopping('Spinach');
  }

}
