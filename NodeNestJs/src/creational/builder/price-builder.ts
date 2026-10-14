/* challenge: builder que calcula o preço da pizza */

import { PizzaSize } from './pizza';
import { PizzaBuilder } from './pizza-builder';

const SIZE_PRICES: Record<PizzaSize, number> = {
  small: 2500,
  medium: 3500,
  large: 4500,
};

const DOUGH_SURCHARGE: Record<string, number> = {
  'Thin Crust Dough': 0,
  'Thick Crust Dough': 500,
  'Whole Wheat Dough': 700,
};

const TOPPING_PRICES: Record<string, number> = {
  Mozzarella: 600,
  Basil: 200,
  Pepperoni: 800,
  Mushroom: 500,
  'Bell Pepper': 400,
  Onion: 300,
  Olives: 400,
};

const DEFAULT_DOUGH_PRICE = 0;
const DEFAULT_TOPPING_PRICE = 500;
const EXTRA_CHEESE_PRICE = 700;

export class PriceBuilder implements PizzaBuilder {
  private size: PizzaSize = 'medium';
  private dough = '';
  private toppings: string[] = [];
  private extraCheese = false;

  reset(): void {
    this.size = 'medium';
    this.dough = '';
    this.toppings = [];
    this.extraCheese = false;
  }

  setSize(size: PizzaSize): void { this.size = size; }
  setDough(dough: string): void { this.dough = dough; }
  setSauce(_sauce: string): void { /* o molho não altera o preço */ }
  addTopping(topping: string): void { this.toppings.push(topping); }
  setExtraCheese(extra: boolean): void { this.extraCheese = extra; }

  getResult(): number {
    let cents = SIZE_PRICES[this.size];
    cents += DOUGH_SURCHARGE[this.dough] ?? DEFAULT_DOUGH_PRICE;
    for (const t of this.toppings) {
      cents += TOPPING_PRICES[t] ?? DEFAULT_TOPPING_PRICE;
    }
    if (this.extraCheese) cents += EXTRA_CHEESE_PRICE;

    this.reset();
    return cents / 100;
  }
}
