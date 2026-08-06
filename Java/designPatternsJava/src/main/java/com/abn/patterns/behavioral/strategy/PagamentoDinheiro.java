package com.abn.patterns.behavioral.strategy;

// ESTRATÉGIAS CONCRETAS
public class PagamentoDinheiro implements FormaPagamento {

    public void pagar(double valor) {
        System.out.println("Pago em dinheiro: R$" + valor + " — aguarde o troco");
    }
}
