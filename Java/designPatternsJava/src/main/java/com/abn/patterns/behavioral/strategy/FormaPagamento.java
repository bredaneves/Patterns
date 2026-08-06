package com.abn.patterns.behavioral.strategy;

// STRATEGY — interface comum para todos os algoritmos
public interface FormaPagamento {

    void pagar(double valor);
}
