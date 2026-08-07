package com.abn.patterns.behavioral.observer;

// OBSERVERS CONCRETOS
public class ClienteApp implements Observer {

    public void atualizar(String pedido) {
        System.out.println("[App] Notificando cliente: " + pedido);
    }
}
