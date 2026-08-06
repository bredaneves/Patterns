package com.abn.patterns.behavioral.state;

// ESTADOS CONCRETOS
public class EstadoEntregue implements EstadoPedido {

    public void avancar(Pedido pedido)  {
        System.out.println("Pedido já finalizado.");
    }

    public void cancelar(Pedido pedido) {
        System.out.println("Não é possível cancelar — já entregue.");
    }

    public String getDescricao() {
        return "Entregue";
    }
}
