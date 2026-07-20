package com.abn.patterns.structural.composite;

/* GERAL

Os quatro restantes — cada um resolve um problema distinto

Bridge — o problema é explosão de subclasses.
Você tem duas dimensões que variam independentemente (ex: tipo de pizza + canal de entrega).
Sem Bridge, cada combinação vira uma classe separada.

Composite — o problema é hierarquia parte/todo.
Você quer tratar um item individual e um grupo de itens da mesma forma (ex: ingrediente único vs combo de ingredientes).

Decorator — o problema é adicionar comportamento sem herança.
Você quer enriquecer um objeto com funcionalidades extras em tempo de execução, empilhando camadas.

Flyweight — o problema é memória com muitos objetos similares.
Você cria milhares de objetos que compartilham a maior parte do estado — Flyweight separa o que é compartilhável do que é único.
 */

/* COMPOSITE
A pizzaria quer calcular o preço de um pedido — que pode ser uma pizza avulsa, ou um combo (pizza + bebida + sobremesa),
ou um super-combo (vários combos juntos). O código de cálculo deve ser o mesmo em todos os casos.
O problema: sem Composite, você precisa saber se está lidando com um item simples ou um grupo antes de calcular.
Com Composite, tudo implementa a mesma interface — o cálculo é idêntico independente de profundidade.

Onde você já viu isso: estrutura de menus de sistema (item de menu vs sub-menu), hierarquia de departamentos em RH,
árvore de categorias de produtos em ERP — qualquer estrutura parte/todo é candidata ao Composite.
 */

public class Main {

    public static void main(String[] args) {

        // USO — estrutura em árvore
        PizzaItem margherita = new PizzaItem("Margherita", 45.0);
        PizzaItem refri      = new PizzaItem("Refrigerante", 8.0);
        PizzaItem sobremesa  = new PizzaItem("Tiramisu", 18.0);
        PizzaItem pepperoni  = new PizzaItem("Pepperoni", 52.0);

        Combo comboBasico = new Combo("Básico");
        comboBasico.adicionar(margherita);
        comboBasico.adicionar(refri);

        Combo comboFamilia = new Combo("Família");
        comboFamilia.adicionar(comboBasico);  // combo dentro de combo!
        comboFamilia.adicionar(pepperoni);
        comboFamilia.adicionar(sobremesa);

        comboFamilia.descrever("");
        // [Combo] Família R$123.0
        //   [Combo] Básico R$53.0
        //     Margherita R$45.0
        //     Refrigerante R$8.0
        //   Pepperoni R$52.0
        //   Tiramisu R$18.0

        // getPreco() funciona igual — não importa a profundidade
        System.out.println(margherita.getPreco());   // 45.0
        System.out.println(comboFamilia.getPreco()); // 123.0
    }
}
