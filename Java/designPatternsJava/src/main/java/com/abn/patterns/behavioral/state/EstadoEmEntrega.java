package com.abn.patterns.behavioral.state;

// ESTADOS CONCRETOS
public class EstadoEmEntrega implements EstadoPedido {

    public void avancar(Pedido pedido) {
        System.out.println("Pizza entregue!");
        pedido.setEstado(new EstadoEntregue());
    }
    public void cancelar(Pedido pedido) {
        System.out.println("Não é possível cancelar — pedido já saiu para entrega.");
    }
    public String getDescricao() { return "Em entrega"; }
}
