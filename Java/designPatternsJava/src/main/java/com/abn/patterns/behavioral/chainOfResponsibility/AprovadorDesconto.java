package com.abn.patterns.behavioral.chainOfResponsibility;

// HANDLER BASE — cada aprovador conhece o próximo
abstract class AprovadorDesconto {

    protected AprovadorDesconto proximo;

    public AprovadorDesconto setProximo(AprovadorDesconto proximo) {
        this.proximo = proximo;
        return proximo; // permite encadeamento fluente
    }

    public abstract void aprovar(double valor);
}
