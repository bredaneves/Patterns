/*
Um aviso de nomenclatura, como nos padrões anteriores: o JavaScript já traz o Iterator no próprio 
protocolo da linguagem (Symbol.iterator, for...of, geradores com function*). 
Por isso vamos construir primeiro a versão clássica do GoF (hasNext/next), que mostra a ideia, 
e depois a versão idiomática. A interface leva o nome MenuIterator para não colidir com o tipo 
global Iterator do TypeScript.

A ideia do padrão: dar um jeito uniforme de percorrer uma coleção sem expor como ela é guardada por dentro. 
No exemplo, a pizzaria juntou dois cardápios: o da casa guarda os itens num array e o novo, numa lista encadeada. 
O garçom precisa imprimir os dois com o mesmo código.

O resultado esperado:

Os dois cardápios saem impressos no mesmo formato (três itens cada), apesar de a estrutura interna ser diferente. 
O printMenu só conhece a interface Menu.
Iteradores independentes: Pepperoni | Margherita. O primeiro iterador já andou duas posições, 
e o segundo começou do zero.
for...of lista Veggie, Calabresa e Frango com Catupiry, sem nenhum createIterator().
Vegetarianas: [ 'Margherita', 'Quatro Queijos', 'Veggie' ]. O gerador vegetarian não sabe nada de arrays 
nem de listas, só de Iterable. Se o editor reclamar do for...of ou do spread, 
confira o target do tsconfig.json (precisa ser ES2015 ou superior; 
o gerado pelo tsc --init atual deve estar certo).
*/

import { Menu, MenuItem } from './menu-iterator';
import { ArrayMenu, LinkedMenu } from './menus';

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

const house = new ArrayMenu()
  .add({ name: 'Margherita', priceInCents: 4500, vegetarian: true })
  .add({ name: 'Pepperoni', priceInCents: 5500, vegetarian: false })
  .add({ name: 'Quatro Queijos', priceInCents: 5200, vegetarian: true });

const modern = new LinkedMenu()
  .add({ name: 'Veggie', priceInCents: 5000, vegetarian: true })
  .add({ name: 'Calabresa', priceInCents: 4800, vegetarian: false })
  .add({ name: 'Frango com Catupiry', priceInCents: 5300, vegetarian: false });

// 1. Versão clássica: o mesmo código para as duas estruturas
const printMenu = (title: string, menu: Menu): void => {
  console.log(`--- ${title} ---`);
  const it = menu.createIterator();
  while (it.hasNext()) {
    const item = it.next();
    console.log(`  ${item.name}: ${brl.format(item.priceInCents / 100)}`);
  }
};

printMenu('Cardápio da casa (array)', house);
printMenu('Cardápio novo (lista encadeada)', modern);

// 2. Dois iteradores independentes sobre a mesma coleção
console.log('\n--- Iteradores independentes ---');
const a = house.createIterator();
const b = house.createIterator();
a.next();
console.log(a.next().name, '|', b.next().name);

// 3. Versão idiomática: for...of funciona nas duas
console.log('\n--- for...of ---');
for (const item of modern) console.log(`  ${item.name}`);

// 4. Gerador que filtra, funcionando com qualquer coleção
function* vegetarian(items: Iterable<MenuItem>): Generator<MenuItem> {
  for (const item of items) {
    if (item.vegetarian) yield item;
  }
}

console.log('\n--- Só vegetarianas, das duas coleções ---');
console.log([...vegetarian(house), ...vegetarian(modern)].map((i) => i.name));
