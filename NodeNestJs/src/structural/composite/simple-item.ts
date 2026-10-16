/* Passo 3: a folha 

A folha não tem filhos. Ela faz o trabalho direto.*/

import { MenuItem, formatPrice } from './menu-item';

export class SimpleItem implements MenuItem {
  constructor(
    public readonly name: string,
    private readonly priceInCents: number,
  ) {}

  getPrice(): number {
    return this.priceInCents;
  }

  print(indent = 0): void {
    console.log(`${' '.repeat(indent)}- ${this.name}: ${formatPrice(this.getPrice())}`);
  }
}
