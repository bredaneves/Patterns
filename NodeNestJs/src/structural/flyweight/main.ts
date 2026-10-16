/*
A ideia do padrão: quando você precisa de milhares de objetos parecidos, 
a maior parte do que eles guardam se repete. O Flyweight separa o estado em duas partes:

Intrínseco: o que é igual para muitos objetos (nome da pizza, ingredientes, foto). 
Fica num objeto compartilhado e imutável.
Extrínseco: o que muda de objeto para objeto (número do pedido, mesa, tamanho). 
Fica fora do compartilhado e é passado ou guardado por quem usa.

No exemplo, a pizzaria tem milhares de pedidos em memória, mas só três tipos de pizza. 
Sem o padrão, cada pedido carregaria a sua própria cópia da foto da pizza.
*/

import { PizzaTypeFactory } from './pizza-type-factory';
import { createPizzaType } from './pizza-type';
import { Order, PizzaSize } from './order';

const NAMES = ['Margherita', 'Pepperoni', 'Veggie'];
const SIZES: PizzaSize[] = ['small', 'medium', 'large'];
const TOTAL = 5000;

const arrayBuffersKb = () => Math.round(process.memoryUsage().arrayBuffers / 1024);

const factory = new PizzaTypeFactory();

console.log('--- Identidade ---');
console.log('Mesma instância?', factory.get('Margherita') === factory.get('Margherita'));

console.log('\n--- Com Flyweight ---');
const before1 = arrayBuffersKb();
const shared: Order[] = [];
for (let i = 0; i < TOTAL; i++) {
  shared.push(new Order(i, i % 20, SIZES[Math.floor(i / 3) % 3], factory.get(NAMES[i % 3])));  
}
console.log(`${TOTAL} pedidos, ${factory.count} tipos criados`);
console.log(`Memória de buffers: ~${arrayBuffersKb() - before1} KB`);

console.log('\n--- Sem Flyweight (cada pedido com a sua cópia) ---');
const before2 = arrayBuffersKb();
const naive: Order[] = [];
for (let i = 0; i < TOTAL; i++) {
  naive.push(new Order(i, i % 20, SIZES[Math.floor(i / 3) % 3], createPizzaType(NAMES[i % 3])));
}
console.log(`${TOTAL} pedidos, ${TOTAL} tipos criados`);
console.log(`Memória de buffers: ~${arrayBuffersKb() - before2} KB`);

console.log('\n--- Mesmo resultado ---');
console.log(shared[7].describe(), '->', shared[7].getPriceInCents());
console.log(naive[7].describe(), '->', naive[7].getPriceInCents());
