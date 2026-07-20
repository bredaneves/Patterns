package com.abn.patterns.structural.composite;

// INTERFACE COMUM — item simples e grupo implementam a mesma
public interface ItemPedido {

    double getPreco();
    void   descrever(String indent);
}
