/* Passo 4: o mediador concreto 

Este é o coração do padrão, com três pontos:
O fluxo inteiro (massa, forno, embalagem, entrega) está num único switch. Para entender ou mudar a ordem, 
você lê um arquivo.
O coordenador guarda estado que nenhuma estação tem: a pizza de cada pedido e a regra “cozinha fechada”. 
O caixa não sabe que a cozinha fechou, e nem precisa.
O pizzaOf usa ?? 'pizza' por causa do | undefined que o seu tsconfig exige nos acessos ao Map.
*/

import { Colleague, KitchenEvent, Mediator } from './mediator';
import { Cashier, DoughStation, Oven, PackingDesk, DeliveryDesk } from './stations';

export class OrderCoordinator implements Mediator {
  private readonly orders = new Map<number, string>();
  private open = true;
  private delivered = 0;
  private rejected = 0;

  constructor(
    cashier: Cashier,
    private readonly dough: DoughStation,
    private readonly oven: Oven,
    private readonly packing: PackingDesk,
    private readonly delivery: DeliveryDesk,
  ) {
    for (const station of [cashier, dough, oven, packing, delivery]) {
      station.setMediator(this);
    }
  }

  closeKitchen(): void {
    this.open = false;
  }

  get summary(): string {
    return `entregues: ${this.delivered}, recusados: ${this.rejected}`;
  }

  notify(sender: Colleague, event: KitchenEvent): void {
    console.log(`  [MEDIADOR] ${sender.constructor.name} -> ${event.type}`);

    switch (event.type) {
      case 'orderPlaced':
        if (!this.open) {
          console.log(`  [MEDIADOR] Cozinha fechada: pedido #${event.orderId} recusado`);
          this.rejected += 1;
          return;
        }
        this.orders.set(event.orderId, event.pizza);
        this.dough.prepare(event.orderId, event.pizza);
        break;
      case 'doughReady':
        this.oven.bake(event.orderId, this.pizzaOf(event.orderId));
        break;
      case 'pizzaBaked':
        this.packing.pack(event.orderId);
        break;
      case 'orderPacked':
        this.delivery.dispatch(event.orderId, this.pizzaOf(event.orderId));
        break;
      case 'dispatched':
        this.orders.delete(event.orderId);
        this.delivered += 1;
        break;
    }
  }

  private pizzaOf(orderId: number): string {
    return this.orders.get(orderId) ?? 'pizza';
  }
}
