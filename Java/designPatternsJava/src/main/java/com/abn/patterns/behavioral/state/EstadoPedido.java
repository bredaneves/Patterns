package com.abn.patterns.behavioral.state;

// INTERFACE DE ESTADO
public interface EstadoPedido {

    void avancar(Pedido pedido);
    void cancelar(Pedido pedido);
    String getDescricao();
}
