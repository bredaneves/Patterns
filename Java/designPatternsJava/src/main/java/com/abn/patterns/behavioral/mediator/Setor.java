package com.abn.patterns.behavioral.mediator;

// COMPONENTE BASE — cada setor conhece só o mediador
abstract class Setor {

    protected Mediator mediator;

    public Setor(Mediator mediator) {
        this.mediator = mediator;
    }
}
