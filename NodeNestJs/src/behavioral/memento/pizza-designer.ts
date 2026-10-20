/* Passo 2: o originator e o memento 

Três pontos:

O encapsulamento é o ponto delicado do padrão. No Java o memento costuma ser uma classe interna, 
com acesso exclusivo ao originator. Em TypeScript, a solução natural é a privacidade de módulo: 
a classe DesignSnapshot não é exportada, e o resto do código só conhece a interface Snapshot, 
que tem rótulo e data e mais nada.
A cópia é profunda nos dois sentidos: ao criar o snapshot (para mudanças posteriores no designer 
não alterarem a foto) e ao ler (para o estado restaurado não compartilhar o array com a foto). 
É o mesmo cuidado que você teve no Prototype.
O instanceof no restore impede que alguém entregue um objeto qualquer que apenas pareça um Snapshot.
*/

export type Size = 'small' | 'medium' | 'large';

interface DesignState {
  size: Size;
  dough: string;
  toppings: string[];
}

// O que o caretaker enxerga: só metadados, nenhum acesso ao estado
export interface Snapshot {
  readonly label: string;
  readonly createdAt: Date;
}

// Não exportada: só este módulo consegue criar e ler o conteúdo
class DesignSnapshot implements Snapshot {
  readonly createdAt = new Date();
  private readonly state: DesignState;

  constructor(
    readonly label: string,
    state: DesignState,
  ) {
    this.state = { ...state, toppings: [...state.toppings] };
  }

  getState(): DesignState {
    return { ...this.state, toppings: [...this.state.toppings] };
  }
}

export class PizzaDesigner {
  private state: DesignState = { size: 'medium', dough: 'Tradicional', toppings: [] };

  setSize(size: Size): void {
    this.state.size = size;
  }

  setDough(dough: string): void {
    this.state.dough = dough;
  }

  addTopping(topping: string): void {
    this.state.toppings.push(topping);
  }

  save(label: string): Snapshot {
    return new DesignSnapshot(label, this.state);
  }

  restore(snapshot: Snapshot): void {
    if (!(snapshot instanceof DesignSnapshot)) {
      throw new Error('Snapshot não pertence a este designer');
    }
    this.state = snapshot.getState();
  }

  describe(): string {
    return `${this.state.size}, massa ${this.state.dough}, [${this.state.toppings.join(', ')}]`;
  }
}
