package com.abn.patterns.behavioral.observer;

import java.util.ArrayList;
import java.util.List;

// SUBJECT CONCRETO — a cozinha
public class Cozinha implements Subject {

    private List<Observer> observers = new ArrayList<>();

    public void inscrever(Observer o)    { observers.add(o); }
    public void desinscrever(Observer o) { observers.remove(o); }

    public void notificarTodos(String pedido) {
        observers.forEach(o -> o.atualizar(pedido));
    }

    public void pedidoPronto(String pedido) {
        System.out.println("[Cozinha] Pedido pronto: " + pedido);
        notificarTodos(pedido); // dispara para todos os inscritos
    }
}
