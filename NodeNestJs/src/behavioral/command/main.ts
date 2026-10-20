/*
A ideia do padrão: transformar uma solicitação em um objeto. Em vez de chamar cart.add(item) direto, 
você cria um objeto “adicionar este item” que guarda quem vai executar (o receiver) e os parâmetros. 
Como a ação virou um objeto, ela pode ser guardada numa lista, desfeita, refeita, enfileirada ou agrupada.

No exemplo, o terminal de pedidos da pizzaria tem desfazer e refazer, como um editor de texto.

O resultado esperado:

Início: dois itens (R$ 100,00); depois do desfazer, só a Margherita (R$ 45,00); depois do refazer, de volta aos dois.
Esvaziar: Carrinho vazio, e o desfazer traz os dois itens de volta.
Macro: o carrinho passa a ter 5 itens (R$ 165,00), e um único undo() remove os três itens do combo de uma vez, 
voltando a R$ 100,00.
Desfazendo tudo: dois desfeito (o segundo e o primeiro item), depois Nada para desfazer, e o carrinho vazio.
*/

import { Cart } from './cart';
import { OrderTerminal } from './order-terminal';
import { AddItemCommand, ClearCartCommand, MacroCommand } from './commands';

const margherita = { name: 'Pizza Margherita', priceInCents: 4500 };
const pepperoni = { name: 'Pizza Pepperoni', priceInCents: 5500 };
const refrigerante = { name: 'Refrigerante', priceInCents: 800 };
const brownie = { name: 'Brownie', priceInCents: 1200 };

const cart = new Cart();
const terminal = new OrderTerminal();

terminal.run(new AddItemCommand(cart, margherita));
terminal.run(new AddItemCommand(cart, pepperoni));
cart.print();

terminal.undo();
cart.print();

terminal.redo();
cart.print();

console.log('\n--- Comando com estado guardado ---');
terminal.run(new ClearCartCommand(cart));
cart.print();
terminal.undo();
cart.print();

console.log('\n--- Macro: vários comandos como um só ---');
terminal.run(
  new MacroCommand('Combo Casal', [
    new AddItemCommand(cart, margherita),
    new AddItemCommand(cart, refrigerante),
    new AddItemCommand(cart, brownie),
  ]),
);
cart.print();
terminal.undo();
cart.print();

console.log('\n--- Desfazendo tudo ---');
terminal.undo();
terminal.undo();
terminal.undo();
cart.print();
