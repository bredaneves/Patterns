package com.abn.patterns.behavioral.visitor;

// INTERFACE ELEMENTO — aceita qualquer visitor
public interface ItemPedido {

    void aceitar(Visitor visitor);
    String getNome();
    double getPreco();
}
