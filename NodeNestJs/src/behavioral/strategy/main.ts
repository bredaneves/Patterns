/*
Os arquivos ficam em src/behavioral/strategy/, e o ambiente já está pronto. 
Com este padrão você abre a categoria Comportamental, que trata de como os objetos se comunicam e 
dividem responsabilidades.

A ideia do padrão: quando existem várias formas de fazer a mesma coisa (calcular um desconto, 
ordenar uma lista, validar um documento), você coloca cada forma numa classe própria com uma interface comum, 
e quem precisa do resultado recebe a estratégia de fora. O if/else ou switch gigante some, 
e uma forma nova não exige mexer no código que já funciona.

No exemplo, o checkout da pizzaria calcula o desconto de um pedido. A regra muda conforme o cupom, 
mas o checkout não precisa saber qual é.

O subtotal é R$ 108,00, e o resultado esperado é:

Sem desconto: total R$ 108,00.
10%: desconto R$ 10,80, total R$ 97,20.
R$ 15 off (mínimo R$ 100): desconto R$ 15,00, total R$ 93,00.
R$ 15 off (mínimo R$ 200): o subtotal não atinge o mínimo, então o desconto é R$ 0,00 e o total R$ 108,00.
Cupons: PIZZA10 dá R$ 97,20, BEMVINDO dá R$ 93,00 e INVALIDO cai no NoDiscount (R$ 108,00).

O coupons[code] ?? new NoDiscount() é o tratamento do | undefined que 
o seu tsconfig exige nos acessos por índice, e aqui ele tem um uso real: código desconhecido vira 
“sem desconto” em vez de quebrar.
*/

import { Checkout } from './checkout';
import { DiscountStrategy } from './discount-strategy';
import { NoDiscount, PercentageDiscount, FixedAmountDiscount } from './strategies';

const checkout = new Checkout(new NoDiscount())
  .add({ name: 'Pizza Margherita', priceInCents: 4500 })
  .add({ name: 'Pizza Pepperoni', priceInCents: 5500 })
  .add({ name: 'Refrigerante', priceInCents: 800 });

console.log('--- Trocando a estratégia no mesmo checkout ---');
checkout.print();

checkout.setStrategy(new PercentageDiscount(10));
checkout.print();

checkout.setStrategy(new FixedAmountDiscount(1500, 10000));
checkout.print();

checkout.setStrategy(new FixedAmountDiscount(1500, 20000));
checkout.print();

console.log('\n--- Escolhendo a estratégia por cupom ---');
const coupons: Record<string, DiscountStrategy> = {
  PIZZA10: new PercentageDiscount(10),
  BEMVINDO: new FixedAmountDiscount(1500, 5000),
};

for (const code of ['PIZZA10', 'BEMVINDO', 'INVALIDO']) {
  checkout.setStrategy(coupons[code] ?? new NoDiscount());
  console.log(`Cupom ${code} ->`);
  checkout.print();
}
