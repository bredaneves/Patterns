/* o Facade 
Dois detalhes:

O Facade conhece a ordem: o pagamento vem antes de gastar ingrediente, e o forno só é desligado depois de assar. Essa regra de coordenação mora num lugar só.
Os parâmetros do construtor têm valor padrão, então new PizzaOrderFacade() funciona sem argumentos. 
Mas dá para injetar versões falsas dos componentes num teste, que é o que tornaria o Facade fácil de testar.
*/

import {
  PaymentService, DoughMaker, ToppingsStation,
  Oven, Packager, DeliveryService,
} from './subsystem';

export interface OrderRequest {
  dough: string;
  toppings: string[];
  price: number;
  address: string;
}

export class PizzaOrderFacade {
  constructor(
    private readonly payment = new PaymentService(),
    private readonly dough = new DoughMaker(),
    private readonly toppings = new ToppingsStation(),
    private readonly oven = new Oven(),
    private readonly packager = new Packager(),
    private readonly delivery = new DeliveryService(),
  ) {}

  order(request: OrderRequest): string | null {
    if (!this.payment.charge(request.price)) return null;

    this.dough.prepare(request.dough);
    this.toppings.add(request.toppings);
    this.oven.preheat(350);
    this.oven.bake(25);
    this.oven.turnOff();
    this.packager.cut();
    this.packager.box();

    return this.delivery.schedule(request.address);
  }
}
