package com.abn.patterns.behavioral.observer;

// OBSERVERS CONCRETOS
public class Entregador  implements Observer {

    public void atualizar(String pedido) {
        System.out.println("[Entregador] Buscando: " + pedido);
    }
}
