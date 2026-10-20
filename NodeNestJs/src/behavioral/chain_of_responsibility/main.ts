/*
A ideia do padrão: uma solicitação passa por uma cadeia de objetos, e cada um decide se resolve ou repassa ao próximo. 
Quem envia não sabe quem vai atender, e quem atende não sabe o que vem depois. No exemplo, a pizzaria tem alçadas 
de desconto: o atendente aprova até 5%, o gerente até 15% e o dono até 30%. Acima disso, ninguém aprova.

O resultado esperado:

#1 (3%): o atendente aprova direto, e ninguém mais é consultado.
#2 (10%): o atendente encaminha, o gerente aprova.
#3 (25%): atendente e gerente encaminham, o dono aprova.
#4 (50%): os três encaminham ou esgotam a alçada, e o dono, por ser o último, responde sem alçada e 
sem ninguém depois de mim. O resultado é recusado: 50% excede a alçada de todos.
Cadeia curta: o desconto de 10% pula direto para o dono, sem nenhuma alteração nas classes. 
A montagem da cadeia é decisão do cliente.
*/

import { Approver, DiscountRequest } from './approver';
import { Attendant, Manager, Owner } from './approvers';

const attendant = new Attendant();
attendant.setNext(new Manager()).setNext(new Owner());

const requests: DiscountRequest[] = [
  { orderId: 1, percent: 3 },
  { orderId: 2, percent: 10 },
  { orderId: 3, percent: 25 },
  { orderId: 4, percent: 50 },
];

const process = (chain: Approver, request: DiscountRequest): void => {
  console.log(`Pedido #${request.orderId}: desconto de ${request.percent}%`);
  const decision = chain.handle(request);
  console.log(decision.approved ? `  => aprovado por ${decision.by}` : `  => recusado: ${decision.reason}`);
};

console.log('--- Cadeia completa: Atendente -> Gerente -> Dono ---');
requests.forEach((r) => process(attendant, r));

console.log('\n--- Outra cadeia, sem o gerente: Atendente -> Dono ---');
const shortChain = new Attendant();
shortChain.setNext(new Owner());
process(shortChain, { orderId: 5, percent: 10 });
