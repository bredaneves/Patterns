package com.abn.patterns.behavioral.state;

// ESTADOS CONCRETOS
public class EstadoRecebido implements EstadoPedido {

    public void avancar(Pedido pedido) {
        System.out.println("Pedido foi para a cozinha.");
        pedido.setEstado(new EstadoPreparando());
    }
    public void cancelar(Pedido pedido) {
        System.out.println("Pedido cancelado antes de iniciar.");
        pedido.setEstado(new EstadoCancelado());
    }
    public String getDescricao() { return "Recebido"; }
}
