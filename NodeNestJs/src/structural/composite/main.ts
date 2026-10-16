/*
A ideia do padrão: quando os objetos formam uma árvore (itens simples que podem estar dentro de grupos, 
que por sua vez estão dentro de outros grupos), o cliente quer tratar um item e um grupo do mesmo jeito. 
No exemplo, o cardápio da pizzaria tem itens avulsos e combos, e um combo pode conter outros combos. 
Pedir o preço de qualquer nó da árvore funciona igual, não importa se é uma pizza ou um combo inteiro.

O resultado esperado é a árvore indentada com estes valores:

Combo Família (-15%): R$ 116,28
Bebidas: R$ 17,00 (refrigerante R$ 8,00 + suco R$ 9,00)
Sobremesas (-10%): R$ 19,80 (brownie R$ 12,00 + sorvete R$ 10,00 com desconto)

O combo maior soma 45 + 55 + 17 + 19,80 = R$ 136,80 e aplica os 15%, chegando a R$ 116,28. 
Os descontos se acumulam em níveis diferentes, e quem chamou familia.getPrice() não precisou saber disso. 
Na última seção do main.ts, os três valores saem em centavos, o que mostra que a mesma chamada serve a uma folha, 
a um sub-combo e à árvore inteira.
*/

import { SimpleItem } from './simple-item';
import { Combo } from './combo';

const margherita = new SimpleItem('Pizza Margherita', 4500);
const pepperoni = new SimpleItem('Pizza Pepperoni', 5500);
const refrigerante = new SimpleItem('Refrigerante', 800);
const suco = new SimpleItem('Suco', 900);
const brownie = new SimpleItem('Brownie', 1200);
const sorvete = new SimpleItem('Sorvete', 1000);

const bebidas = new Combo('Bebidas').add(refrigerante).add(suco);
const sobremesas = new Combo('Sobremesas', 10).add(brownie).add(sorvete);

const familia = new Combo('Combo Família', 15)
  .add(margherita)
  .add(pepperoni)
  .add(bebidas)
  .add(sobremesas);

familia.print();

console.log('\n--- O mesmo método, em qualquer nível ---');
console.log('Folha     :', brownie.getPrice());
console.log('Sub-combo :', sobremesas.getPrice());
console.log('Árvore    :', familia.getPrice());
