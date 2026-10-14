/* a pizza abstrata */

import { Dough, Sauce, Cheese } from './ingredients';

export abstract class Pizza {
  protected dough!: Dough;
  protected sauce!: Sauce;
  protected cheese!: Cheese;

  constructor(public readonly name: string) {}

  abstract prepare(): void;

  bake(): void { console.log('Bake for 25 minutes at 350'); }
  cut(): void { console.log('Cutting the pizza into diagonal slices'); }
  box(): void { console.log('Place pizza in official PizzaStore box'); }
}
