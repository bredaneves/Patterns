package com.abn.patterns.behavioral.state;

// ESTADOS CONCRETOS
public class EstadoPreparando implements EstadoPedido {

    public void avancar(Pedido pedido) {
        System.out.println("Pizza saiu para entrega.");
        pedido.setEstado(new EstadoEmEntrega());
    }
    public void cancelar(Pedido pedido) {
        System.out.println("Cancelado durante preparo — cobrança parcial.");
        pedido.setEstado(new EstadoCancelado());
    }
    public String getDescricao() { return "Preparando"; }
}
