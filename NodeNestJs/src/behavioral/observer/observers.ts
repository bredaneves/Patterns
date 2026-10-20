/* Passo 4: os observers 
Cada observer decide o que fazer e o que ignorar. O painel da cozinha só reage a dois status, 
e o relatório só conta entregas. O Subject manda o mesmo evento para todos.
*/

import { Observer } from './subject';
import { OrderEvent, OrderStatus } from './order-tracker';

const MESSAGES: Record<OrderStatus, string> = {
  received: 'Recebemos o seu pedido',
  baking: 'Seu pedido está no forno',
  ready: 'Seu pedido está pronto',
  delivered: 'Pedido entregue, bom apetite',
};

export class CustomerNotifier implements Observer<OrderEvent> {
  update(event: OrderEvent): void {
    console.log(`  [SMS -> ${event.customer}] ${MESSAGES[event.to]} (#${event.orderId})`);
  }
}

export class KitchenDisplay implements Observer<OrderEvent> {
  update(event: OrderEvent): void {
    if (event.to === 'received') {
      console.log(`  [COZINHA] Novo pedido #${event.orderId} na fila`);
    } else if (event.to === 'baking') {
      console.log(`  [COZINHA] Pedido #${event.orderId} no forno`);
    }
  }
}

export class SalesReport implements Observer<OrderEvent> {
  private delivered = 0;

  update(event: OrderEvent): void {
    if (event.to === 'delivered') this.delivered += 1;
  }

  get deliveredCount(): number {
    return this.delivered;
  }
}
