import { NYPizzaStore, ChicagoPizzaStore } from './stores';

new NYPizzaStore().orderPizza('cheese');
console.log('---');
new ChicagoPizzaStore().orderPizza('cheese');
