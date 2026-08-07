package com.abn.patterns.behavioral.mediator;

// SETORES CONCRETOS — nenhum conhece os outros
public class Cozinha extends Setor {

    public Cozinha(Mediator m) {
        super(m);
    }

    public void prepararPedido(String pedido) {
        System.out.println("[Cozinha] Preparando: " + pedido);
        mediator.notificar(this, "pedido_pronto:" + pedido);
    }
}
