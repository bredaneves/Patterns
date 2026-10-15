/* 
O resultado esperado:

A linha Proxy criado (ainda sem conexão) aparece antes de RealPizzaCatalog: conectando..., 
que só surge na primeira consulta de preço. É o proxy virtual adiando a criação.

A segunda consulta de Margherita mostra [cache] e não chama o remoto. Pepperoni vai ao remoto.

A tentativa do cliente de alterar preço lança Acesso negado, e nenhuma linha [remoto] aparece para ela: 
o proxy barrou antes.

Depois da alteração pelo admin, a consulta do cliente devolve 48 vindo do cache, sem ir ao remoto, 
porque o setPrice do proxy já atualizou o cache.
*/

import { RealPizzaCatalog } from './real-pizza-catalog';
import { LazyCachingProxy, ProtectionProxy } from './proxies';

async function run() {
  const cached = new LazyCachingProxy(() => new RealPizzaCatalog());
  console.log('Proxy criado (ainda sem conexão)\n');

  const customerView = new ProtectionProxy(cached, 'customer');
  const adminView = new ProtectionProxy(cached, 'admin');

  console.log('--- Cliente consulta ---');
  console.log('Preço:', await customerView.getPrice('Margherita'));
  console.log('Preço:', await customerView.getPrice('Margherita'));
  console.log('Preço:', await customerView.getPrice('Pepperoni'));

  console.log('\n--- Cliente tenta alterar ---');
  try {
    await customerView.setPrice('Margherita', 1);
  } catch (e) {
    console.log((e as Error).message);
  }

  console.log('\n--- Admin altera ---');
  await adminView.setPrice('Margherita', 48);
  console.log('Preço:', await customerView.getPrice('Margherita'));
}

void run();
