/*
Os arquivos ficam em src/behavioral/observer/, e o ambiente já está pronto.

Um aviso de nomenclatura, como nos padrões anteriores: o Node já traz o EventEmitter, 
e o RxJS tem o Observable. Os dois implementam a ideia do Observer, mas o padrão do GoF é a decisão de projeto. 
Vamos construí-lo com classes primeiro e comparar com o EventEmitter no desafio.

A ideia do padrão: um objeto (o Subject) muda de estado e precisa avisar outros objetos (os Observers) 
sem conhecê-los de verdade. Ele só sabe que cada um tem um método update. 
Quem quiser ser avisado se inscreve, e quem não quiser mais se desinscreve, sem o Subject ser alterado.

No exemplo, quando um pedido da pizzaria muda de status, três interessados reagem: o SMS do cliente, 
o painel da cozinha e o relatório de vendas.

O resultado esperado:

Pedido da Ana: a cada mudança de status saem os avisos dos observers que se interessam. 
Na criação aparecem o SMS e a cozinha (“Novo pedido na fila”), no forno também SMS e cozinha, em pronto só o SMS, 
e na entrega só o SMS (o relatório conta em silêncio).
Pedido do Bruno: nenhuma linha de SMS, só as da cozinha. O OrderTracker não foi alterado para isso.
Último total: Pedidos entregues no relatório: 2, porque o relatório continuou inscrito.
*/

import { OrderTracker } from './order-tracker';
import { CustomerNotifier, KitchenDisplay, SalesReport } from './observers';

const tracker = new OrderTracker();
const notifier = new CustomerNotifier();
const kitchen = new KitchenDisplay();
const report = new SalesReport();

const unsubscribeNotifier = tracker.subscribe(notifier);
tracker.subscribe(kitchen);
tracker.subscribe(report);

console.log('--- Pedido da Ana, com os três observers ---');
tracker.place(1, 'Ana');
tracker.advance(1, 'baking');
tracker.advance(1, 'ready');
tracker.advance(1, 'delivered');

console.log('\n--- O serviço de SMS sai do ar (desinscreve) ---');
unsubscribeNotifier();

console.log('Pedido do Bruno:');
tracker.place(2, 'Bruno');
tracker.advance(2, 'baking');
tracker.advance(2, 'ready');
tracker.advance(2, 'delivered');

console.log(`\nPedidos entregues no relatório: ${report.deliveredCount}`);
