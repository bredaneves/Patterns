package com.abn.patterns.behavioral.observer;

// INTERFACE SUBJECT — quem dispara eventos
public interface Subject {
    void inscrever(Observer o);
    void desinscrever(Observer o);
    void notificarTodos(String pedido);
}
