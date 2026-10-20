/* Passo 3: o Subject concreto 
O OrderTracker não importa nenhum observer. Ele só chama notify com um evento. 
O if (!order) é o tratamento do | undefined que o seu tsconfig exige nos acessos ao Map.
*/

import { Subject } from './subject';

export type OrderStatus = 'received' | 'baking' | 'ready' | 'delivered';

export interface OrderEvent {
  orderId: number;
  customer: string;
  from: OrderStatus | null;
  to: OrderStatus;
}

interface TrackedOrder {
  customer: string;
  status: OrderStatus;
}

export class OrderTracker extends Subject<OrderEvent> {
  private readonly orders = new Map<number, TrackedOrder>();

  place(orderId: number, customer: string): void {
    this.orders.set(orderId, { customer, status: 'received' });
    this.notify({ orderId, customer, from: null, to: 'received' });
  }

  advance(orderId: number, to: OrderStatus): void {
    const order = this.orders.get(orderId);
    if (!order) throw new Error(`Pedido #${orderId} não existe`);

    const from = order.status;
    order.status = to;
    this.notify({ orderId, customer: order.customer, from, to });
  }
}
