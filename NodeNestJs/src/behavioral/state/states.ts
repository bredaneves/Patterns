/* Passo 3: os estados concretos 
Os seis estados ficam no mesmo arquivo porque se referenciam entre si 
(Received cria Preparing, que cria Baking...). Separar em arquivos criaria imports circulares. 
As regras do negócio estão visíveis aqui: para saber o que acontece no forno, você lê uma classe, 
sem procurar if em vários métodos.*/

import { OrderState, OrderContext } from './order-state';

const reject = (message: string): never => {
  throw new Error(message);
};

export class Received implements OrderState {
  readonly name = 'Recebido';

  next(order: OrderContext): void {
    order.setState(new Preparing());
  }
  cancel(order: OrderContext): void {
    order.setState(new Cancelled());
  }
}

export class Preparing implements OrderState {
  readonly name = 'Em preparo';

  next(order: OrderContext): void {
    order.setState(new Baking());
  }
  cancel(order: OrderContext): void {
    order.setState(new Cancelled());
  }
}

export class Baking implements OrderState {
  readonly name = 'No forno';

  next(order: OrderContext): void {
    order.setState(new Ready());
  }
  cancel(): void {
    reject('A pizza já está no forno, não dá para cancelar');
  }
}

export class Ready implements OrderState {
  readonly name = 'Pronto';

  next(order: OrderContext): void {
    order.setState(new Delivered());
  }
  cancel(): void {
    reject('O pedido já está pronto, não dá para cancelar');
  }
}

export class Delivered implements OrderState {
  readonly name = 'Entregue';

  next(): void {
    reject('O pedido já foi entregue, não há próximo passo');
  }
  cancel(): void {
    reject('O pedido já foi entregue, não dá para cancelar');
  }
}

export class Cancelled implements OrderState {
  readonly name = 'Cancelado';

  next(): void {
    reject('O pedido foi cancelado, não avança');
  }
  cancel(): void {
    reject('O pedido já está cancelado');
  }
}
