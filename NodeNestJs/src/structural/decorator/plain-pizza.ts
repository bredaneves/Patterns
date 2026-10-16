/* Passo 3: o componente concreto 
É o objeto “de dentro” da cebola, que não sabe que existem decoradores.*/

import { Pizza } from './pizza';

export class PlainPizza implements Pizza {
  getDescription(): string {
    return 'Massa tradicional';
  }

  getCost(): number {
    return 3000;
  }
}
