/* a interface do builder 
Repare que não existe getResult() na interface. 
Cada builder concreto devolve um tipo diferente (Pizza num, string no outro), 
então o método de resultado fica na classe concreta. É assim no GoF também.*/

import { PizzaSize } from './pizza';

export interface PizzaBuilder {
  reset(): void;
  setSize(size: PizzaSize): void;
  setDough(dough: string): void;
  setSauce(sauce: string): void;
  addTopping(topping: string): void;
  setExtraCheese(extra: boolean): void;
}
