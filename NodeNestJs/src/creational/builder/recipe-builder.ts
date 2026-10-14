/* o segundo builder, com outra representação */

import { PizzaSize } from './pizza';
import { PizzaBuilder } from './pizza-builder';

export class RecipeBuilder implements PizzaBuilder {
  private steps: string[] = [];

  reset(): void { this.steps = []; }
  setSize(size: PizzaSize): void { this.steps.push(`Stretch a ${size} base`); }
  setDough(dough: string): void { this.steps.push(`Prepare the ${dough}`); }
  setSauce(sauce: string): void { this.steps.push(`Spread the ${sauce}`); }
  addTopping(topping: string): void { this.steps.push(`Add ${topping}`); }
  setExtraCheese(extra: boolean): void {
    if (extra) this.steps.push('Cover with extra cheese');
  }

  getResult(): string {
    const result = this.steps.map((s, i) => `${i + 1}. ${s}`).join('\n');
    this.reset();
    return result;
  }
}
