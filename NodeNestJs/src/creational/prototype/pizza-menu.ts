/* o registro de protótipos */

import { Pizza } from './pizza';

export class PizzaMenu {
  private readonly prototypes = new Map<string, Pizza>();

  register(key: string, prototype: Pizza): void {
    this.prototypes.set(key, prototype);
  }

  order(key: string): Pizza {
    const prototype = this.prototypes.get(key);
    if (!prototype) throw new Error(`Pizza "${key}" não existe no cardápio`);
    return prototype.clone();
  }
}
