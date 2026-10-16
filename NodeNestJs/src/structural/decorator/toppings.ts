/* Passo 4: os decoradores 

Este é o coração do padrão, e tem três pontos:

O decorador implementa a mesma interface que embrulha (implements Pizza), então o cliente não percebe a 
diferença entre uma pizza simples e uma com dez camadas.
Ele guarda uma referência à pizza embrulhada e delega a ela. 
Cada subclasse chama o super (que delega) e acrescenta a sua parte.
A classe abstrata ToppingDecorator concentra a delegação padrão, para os decoradores 
concretos só escreverem o que mudam.
*/

import { Pizza } from './pizza';

export abstract class ToppingDecorator implements Pizza {
  constructor(protected readonly pizza: Pizza) {}

  getDescription(): string {
    return this.pizza.getDescription();
  }

  getCost(): number {
    return this.pizza.getCost();
  }
}

export class ExtraCheese extends ToppingDecorator {
  getDescription(): string {
    return `${super.getDescription()}, queijo extra`;
  }
  getCost(): number {
    return super.getCost() + 600;
  }
}

export class Pepperoni extends ToppingDecorator {
  getDescription(): string {
    return `${super.getDescription()}, pepperoni`;
  }
  getCost(): number {
    return super.getCost() + 800;
  }
}

export class Mushroom extends ToppingDecorator {
  getDescription(): string {
    return `${super.getDescription()}, cogumelos`;
  }
  getCost(): number {
    return super.getCost() + 500;
  }
}

export class StuffedCrust extends ToppingDecorator {
  getDescription(): string {
    return `${super.getDescription()}, borda recheada`;
  }
  getCost(): number {
    return super.getCost() + 900;
  }
}
