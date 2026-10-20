/*
A ideia do padrão: você tem uma estrutura de objetos de tipos diferentes (pizza, bebida, sobremesa) 
e quer fazer várias operações sobre ela (calcular preço, gerar a comanda da cozinha, listar alérgenos) 
sem encher cada classe de métodos para cada operação. Cada operação vira uma classe, o visitor, 
que tem um método para cada tipo de elemento. Os elementos só ganham um método accept, 
que recebe o visitor e responde: “me visite como pizza”.

O truque tem nome, double dispatch. A primeira escolha de método acontece em item.accept(visitor), 
pelo tipo do elemento (polimorfismo comum). A segunda acontece dentro do accept, em visitor.visitPizza(this), 
que já sabe o tipo exato do elemento. No Java o visitor usa sobrecarga (visit(Pizza), visit(Drink)). 
No TypeScript a sobrecarga não existe em tempo de execução, então os métodos têm nomes 
diferentes (visitPizza, visitDrink).

O resultado esperado:

Comanda: PIZZA large Margherita: Mussarela, Manjericão, PIZZA medium Pepperoni: 
Mussarela, Pepperoni, Cebola, BEBIDA Refrigerante 2000ml e SOBREMESA Brownie (ATENÇÃO: contém nozes).
Preços: Margherita R$ 64,50 (4500 × 130% + 2 × 300), Pepperoni R$ 64,00 (5500 × 100% + 3 × 300), 
Refrigerante R$ 12,00 e Brownie R$ 15,00.
Total: R$ 155,50.
O order é uma lista de MenuElement, então o main.ts nunca pergunta “isto é uma pizza?”. 
O polimorfismo faz o roteamento.
*/

import { Dessert, Drink, MenuElement, Pizza } from './menu-elements';
import { KitchenTicketVisitor, TotalPriceVisitor } from './visitors';

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const format = (cents: number): string => brl.format(cents / 100);

const order: MenuElement[] = [
  new Pizza('Margherita', 'large', ['Mussarela', 'Manjericão'], 4500),
  new Pizza('Pepperoni', 'medium', ['Mussarela', 'Pepperoni', 'Cebola'], 5500),
  new Drink('Refrigerante', 2000, 1200),
  new Dessert('Brownie', 1500, true),
];

const price = new TotalPriceVisitor();
const ticket = new KitchenTicketVisitor();

console.log('--- Comanda da cozinha ---');
order.forEach((item) => console.log(`  ${item.accept(ticket)}`));

console.log('\n--- Preço de cada item ---');
order.forEach((item) => console.log(`  ${item.name}: ${format(item.accept(price))}`));

const total = order.reduce((sum, item) => sum + item.accept(price), 0);
console.log(`\nTotal: ${format(total)}`);
