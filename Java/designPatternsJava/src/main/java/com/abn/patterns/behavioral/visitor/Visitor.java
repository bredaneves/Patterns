package com.abn.patterns.behavioral.visitor;

// INTERFACE VISITOR — uma operação para cada tipo de elemento
public interface Visitor {

    void visitar(Pizza     pizza);
    void visitar(Bebida    bebida);
    void visitar(Sobremesa sobremesa);
}
