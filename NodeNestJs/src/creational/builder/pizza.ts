/* o produto */

export type PizzaSize = 'small' | 'medium' | 'large';

export class Pizza {
  size: PizzaSize = 'medium';
  dough = 'Regular Dough';
  sauce = 'Tomato Sauce';
  toppings: string[] = [];
  extraCheese = false;

  describe(): string {
    const toppings = this.toppings.length ? this.toppings.join(', ') : 'no toppings';
    const cheese = this.extraCheese ? ' + extra cheese' : '';
    return `${this.size} pizza, ${this.dough}, ${this.sauce}, ${toppings}${cheese}`;
  }
}
