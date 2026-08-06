package com.abn.patterns.behavioral.state;

// ESTADOS CONCRETOS
public class EstadoCancelado implements EstadoPedido {

    public void avancar(Pedido pedido)  {
        System.out.println("Pedido cancelado — não pode avançar.");
    }

    public void cancelar(Pedido pedido) {
        System.out.println("Já cancelado.");
    }

    public String getDescricao() {
        return "Cancelado";
    }
}
