package com.abn.patterns.behavioral.iterator;

// GARÇOM — usa sempre a mesma interface, não sabe a estrutura interna
public class Garcom {

    void lerCardapio(Cardapio cardapio) {
        IteradorCardapio it = cardapio.criarIterador();
        System.out.println("--- Cardápio ---");
        while (it.hasNext()) {
            System.out.println("  " + it.next());
        }
    }
}
