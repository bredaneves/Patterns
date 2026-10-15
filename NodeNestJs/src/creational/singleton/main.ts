
import { PizzaStore } from './pizza-store';
import { OrderSequence } from './order-sequence';
import { orderCounter } from './order-counter';

const ny = new PizzaStore('NY');
const chicago = new PizzaStore('Chicago');

ny.placeOrder('Margherita');
chicago.placeOrder('Pepperoni');
ny.placeOrder('Veggie');

console.log(OrderSequence.getInstance() === OrderSequence.getInstance());

console.log(orderCounter.next(), orderCounter.next());
