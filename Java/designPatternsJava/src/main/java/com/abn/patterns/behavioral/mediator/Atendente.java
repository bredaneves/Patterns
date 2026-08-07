package com.abn.patterns.behavioral.mediator;

// SETORES CONCRETOS — nenhum conhece os outros
public class Atendente extends Setor {

    public Atendente(Mediator m) {
        super(m);
    }

    public void registrarPedido(String pedido) {
        System.out.println("[Atendente] Registrando pedido: " + pedido);
        mediator.notificar(this, "pedido_registrado:" + pedido);
    }
}
