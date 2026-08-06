package com.abn.patterns.behavioral.strategy;

// ESTRATÉGIAS CONCRETAS
public class PagamentoCartao implements FormaPagamento {

    public void pagar(double valor) {
        double total = valor * 1.03; // 3% de taxa
        System.out.println("Pago no cartão: R$" + total + " (com taxa)");
    }
}
