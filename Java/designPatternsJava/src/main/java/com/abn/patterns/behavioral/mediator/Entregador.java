package com.abn.patterns.behavioral.mediator;

// SETORES CONCRETOS — nenhum conhece os outros
public class Entregador extends Setor {

    public Entregador(Mediator m) {
        super(m);
    }

    public void entregar(String pedido) {
        System.out.println("[Entregador] Saindo com: " + pedido);
        mediator.notificar(this, "pedido_entregue:" + pedido);
    }
}
