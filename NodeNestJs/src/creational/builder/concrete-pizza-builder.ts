/* o builder concreto que monta a pizza 
O getResult() zera o builder depois de entregar a pizza, 
para que o próximo pedido não herde os ingredientes do anterior.
*/

import { Pizza, PizzaSize } from './pizza';
import { PizzaBuilder } from './pizza-builder';

export class ConcretePizzaBuilder implements PizzaBuilder {
  private pizza = new Pizza();

  reset(): void { this.pizza = new Pizza(); }
  setSize(size: PizzaSize): void { this.pizza.size = size; }
  setDough(dough: string): void { this.pizza.dough = dough; }
  setSauce(sauce: string): void { this.pizza.sauce = sauce; }
  addTopping(topping: string): void { this.pizza.toppings.push(topping); }
  setExtraCheese(extra: boolean): void { this.pizza.extraCheese = extra; }

  getResult(): Pizza {
    const result = this.pizza;
    this.reset();
    return result;
  }
}
