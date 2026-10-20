/* Passo 2: o contrato 
Os eventos formam uma união discriminada pelo campo type, então o compilador sabe quais campos existem em cada caso. 
Este arquivo é o único que as estações importam, e o coordenador importa as estações. 
Essa separação evita um import circular entre os arquivos.
*/

export type KitchenEvent =
  | { type: 'orderPlaced'; orderId: number; pizza: string }
  | { type: 'doughReady'; orderId: number }
  | { type: 'pizzaBaked'; orderId: number }
  | { type: 'orderPacked'; orderId: number }
  | { type: 'dispatched'; orderId: number };

export interface Mediator {
  notify(sender: Colleague, event: KitchenEvent): void;
}

export abstract class Colleague {
  private mediator: Mediator | undefined;

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  protected emit(event: KitchenEvent): void {
    if (!this.mediator) throw new Error('Estação sem mediador');
    this.mediator.notify(this, event);
  }
}
