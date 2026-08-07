package com.abn.patterns.behavioral.mediator;

// INTERFACE MEDIATOR
public interface Mediator {

    void notificar(Setor remetente, String evento);
}
