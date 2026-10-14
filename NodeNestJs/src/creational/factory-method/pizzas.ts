/* Crie uma pizza por estilo regional */

import { Pizza } from './pizza';

export class NYStyleCheesePizza extends Pizza {
  constructor() {
    super('NY Style Cheese Pizza', 'Thin Crust Dough', 'Marinara Sauce', ['Reggiano Cheese']);
  }
}

export class ChicagoStyleCheesePizza extends Pizza {
  constructor() {
    super('Chicago Style Cheese Pizza', 'Extra Thick Crust Dough', 'Plum Tomato Sauce', ['Mozzarella Cheese']);
  }
  cut(): void { console.log('Cutting into square slices'); }
}
