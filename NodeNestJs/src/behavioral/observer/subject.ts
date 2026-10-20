/* Passo 2: a base do padrão 

Três decisões:

O subscribe devolve uma função de cancelamento, que é o jeito idiomático em TypeScript. 
No Java você teria um removeObserver(observer) separado.
O notify é protected, então só o próprio Subject dispara avisos. Um cliente de fora não consegue forjar um evento.
O for percorre uma cópia ([...this.observers]). O motivo vira o desafio 2.
*/

export interface Observer<T> {
  update(event: T): void;
}

export class Subject<T> {
  private readonly observers = new Set<Observer<T>>();

  subscribe(observer: Observer<T>): () => void {
    this.observers.add(observer);
    return () => {
      this.observers.delete(observer);
    };
  }

  protected notify(event: T): void {
    for (const observer of [...this.observers]) {
      observer.update(event);
    }
  }
}
