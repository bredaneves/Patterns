import {
  PaymentService, DoughMaker, ToppingsStation,
  Oven, Packager, DeliveryService,
} from './subsystem';
import { PizzaOrderFacade } from './pizza-order-facade';

console.log('=== Sem Facade: o cliente coordena tudo ===');
const payment = new PaymentService();
const dough = new DoughMaker();
const toppings = new ToppingsStation();
const oven = new Oven();
const packager = new Packager();
const delivery = new DeliveryService();

if (payment.charge(65)) {
  dough.prepare('fina');
  toppings.add(['Mussarela', 'Manjericão']);
  oven.preheat(350);
  oven.bake(25);
  oven.turnOff();
  packager.cut();
  packager.box();
  delivery.schedule('Rua A, 100');
}

console.log('\n=== Com Facade: uma chamada ===');
const facade = new PizzaOrderFacade();
const tracking = facade.order({
  dough: 'fina',
  toppings: ['Mussarela', 'Manjericão'],
  price: 65,
  address: 'Rua A, 100',
});
console.log('Código de rastreio:', tracking);

console.log('\n=== Pedido recusado ===');
console.log('Resultado:', facade.order({
  dough: 'grossa',
  toppings: ['Calabresa'],
  price: 150,
  address: 'Rua B, 200',
}));
