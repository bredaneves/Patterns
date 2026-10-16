/* Passo 4: o contexto 
O Order não tem nenhum if sobre estado. Ele delega next() e cancel() ao estado atual e passa this, 
para o estado poder pedir a troca.*/

import { OrderContext, OrderState } from './order-state';
import { Received } from './states';

export class Order implements OrderContext {
  private state: OrderState = new Received();

  constructor(public readonly id: number) {}

  setState(state: OrderState): void {
    console.log(`  Pedido #${this.id}: ${this.state.name} -> ${state.name}`);
    this.state = state;
  }

  next(): void {
    this.state.next(this);
  }

  cancel(): void {
    this.state.cancel(this);
  }

  get status(): string {
    return this.state.name;
  }
}
