import { NYPizzaStore, ChicagoPizzaStore } from './stores';

const nyStore = new NYPizzaStore();
const chicagoStore = new ChicagoPizzaStore();

nyStore.orderPizza('cheese');
console.log('---');
chicagoStore.orderPizza('cheese');
