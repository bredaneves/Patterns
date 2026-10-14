/* o protótipo concreto 
   A diferença entre clone() e shallowClone() é o coração do padrão. 
   Na cópia rasa, o clone compartilha o array toppings e o objeto dough com o original. 
   Alterar um altera o outro. O [...this.toppings] e o { ...this.dough } criam duplicatas independentes.
*/

import { Prototype } from './prototype';

export type PizzaSize = 'small' | 'medium' | 'large';

export interface Dough {
  type: string;
  thickness: number; // em mm
}

export class Pizza implements Prototype<Pizza> {
  constructor(
    public name: string,
    public size: PizzaSize,
    public toppings: string[],
    public dough: Dough,
  ) {}

  // Cópia profunda: arrays e objetos internos também são duplicados
  clone(): Pizza {
    return new Pizza(this.name, this.size, [...this.toppings], { ...this.dough });
  }

  // Cópia rasa, só para demonstrar o erro clássico
  shallowClone(): Pizza {
    return new Pizza(this.name, this.size, this.toppings, this.dough);
  }

  describe(): string {
    return `${this.name} (${this.size}): ${this.dough.type} ${this.dough.thickness}mm, [${this.toppings.join(', ')}]`;
  }
}
