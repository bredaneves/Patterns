package com.abn.patterns.behavioral.observer;

// OBSERVERS CONCRETOS
public class Caixa implements Observer {

    public void atualizar(String pedido) {
        System.out.println("[Caixa] Liberando cobrança: " + pedido);
    }
}
