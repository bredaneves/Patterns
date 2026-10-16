/*
A ideia do padrão: um objeto se comporta de formas diferentes conforme o seu estado atual. 
Em vez de espalhar if (status === 'preparing') por todos os métodos, cada estado vira uma classe que 
sabe o que pode e o que não pode acontecer naquele momento, e quem decide o próximo estado é o próprio estado.

No exemplo, o pedido da pizzaria passa por Recebido → Em preparo → No forno → Pronto → Entregue, 
e pode ser cancelado só enquanto ainda não foi para o forno.

O resultado esperado:

Fluxo normal: quatro transições (Recebido -> Em preparo -> No forno -> Pronto -> Entregue).
Cancelamento: Recebido -> Em preparo e depois Em preparo -> Cancelado.
Operações inválidas: três linhas de ERRO com as mensagens de cada estado, e nenhuma troca de estado acontece nelas.
Status finais: Entregue | Cancelado | No forno.
*/

import { Order } from './order';

const attempt = (label: string, action: () => void): void => {
  try {
    action();
  } catch (e) {
    console.log(`  ERRO em "${label}": ${(e as Error).message}`);
  }
};

console.log('--- Fluxo normal ---');
const first = new Order(1);
first.next();
first.next();
first.next();
first.next();

console.log('\n--- Cancelamento antes do forno ---');
const second = new Order(2);
second.next();
second.cancel();

console.log('\n--- Operações inválidas ---');
const third = new Order(3);
third.next();
third.next();
attempt('cancelar no forno', () => third.cancel());
attempt('avançar pedido entregue', () => first.next());
attempt('avançar pedido cancelado', () => second.next());
console.log('Status finais:', first.status, '|', second.status, '|', third.status);
