/* Passo 3: a fábrica de flyweights 
A fábrica é o ponto central: o cliente nunca usa new PizzaType(...), sempre pede por get. 
Se o tipo já existe, devolve o mesmo objeto. Se não, cria e guarda.
*/

import { PizzaType, createPizzaType } from './pizza-type';

export class PizzaTypeFactory {
  private readonly types = new Map<string, PizzaType>();

  get(name: string): PizzaType {
    let type = this.types.get(name);
    if (!type) {
      type = createPizzaType(name);
      this.types.set(name, type);
    }
    return type;
  }

  get count(): number {
    return this.types.size;
  }
}
