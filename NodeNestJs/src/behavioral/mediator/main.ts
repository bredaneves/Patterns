/* A ideia do padrão: quando vários objetos precisam conversar entre si, deixar que cada um fale com todos
os outros cria uma teia de referências (com 5 objetos, até 20 ligações). No Mediator, eles só conhecem um 
coordenador, e é ele quem sabe quem deve reagir a quê. Os objetos (chamados de colleagues) ficam simples e 
reutilizáveis, e a lógica de coordenação mora num lugar só.

No exemplo, a pizzaria tem cinco estações: caixa, massa, forno, embalagem e entrega. 
Nenhuma sabe da existência das outras. O coordenador conduz o pedido de uma para a outra. 

O resultado esperado:
Cada pedido normal percorre a sequência Caixa, Massa, Forno, Embalagem e Entrega, com uma linha [MEDIADOR] entre 
cada etapa. As chamadas são síncronas e aninhadas, então a sequência sai em ordem e termina com 
Cashier -> ... seguido de DeliveryDesk -> dispatched.
Pedido #3: só aparecem a linha do caixa, a do mediador (Cashier -> orderPlaced) e a de recusa. 
Nenhuma estação seguinte é acionada, e o Cashier não foi alterado para isso.
Resumo: entregues: 2, recusados: 1.
*/

import { OrderCoordinator } from './order-coordinator';
import { Cashier, DoughStation, Oven, PackingDesk, DeliveryDesk } from './stations';

const cashier = new Cashier();
const coordinator = new OrderCoordinator(
  cashier,
  new DoughStation(),
  new Oven(),
  new PackingDesk(),
  new DeliveryDesk(),
);

console.log('--- Pedidos normais ---');
cashier.takeOrder(1, 'Margherita');
console.log();
cashier.takeOrder(2, 'Pepperoni');

console.log('\n--- Cozinha fecha ---');
coordinator.closeKitchen();
cashier.takeOrder(3, 'Veggie');

console.log(`\nResumo: ${coordinator.summary}`);
