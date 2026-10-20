/* Passo 3: as estações 
Nenhuma estação importa outra. A do forno só sabe assar e avisar “terminei”. 
Quem recebe esse aviso, ela não sabe.
*/

import { Colleague } from './mediator';

export class Cashier extends Colleague {
  takeOrder(orderId: number, pizza: string): void {
    console.log(`[CAIXA] Pedido #${orderId}: ${pizza}`);
    this.emit({ type: 'orderPlaced', orderId, pizza });
  }
}

export class DoughStation extends Colleague {
  prepare(orderId: number, pizza: string): void {
    console.log(`[MASSA] Abrindo a massa de ${pizza} (#${orderId})`);
    this.emit({ type: 'doughReady', orderId });
  }
}

export class Oven extends Colleague {
  bake(orderId: number, pizza: string): void {
    console.log(`[FORNO] Assando ${pizza} (#${orderId})`);
    this.emit({ type: 'pizzaBaked', orderId });
  }
}

export class PackingDesk extends Colleague {
  pack(orderId: number): void {
    console.log(`[EMBALAGEM] Pedido #${orderId} na caixa`);
    this.emit({ type: 'orderPacked', orderId });
  }
}

export class DeliveryDesk extends Colleague {
  dispatch(orderId: number, pizza: string): void {
    console.log(`[ENTREGA] Saiu para entrega: ${pizza} (#${orderId})`);
    this.emit({ type: 'dispatched', orderId });
  }
}
