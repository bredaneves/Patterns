package com.abn.patterns.behavioral.strategy;

// ESTRATÉGIAS CONCRETAS
public class PagamentoPix implements FormaPagamento {

    public void pagar(double valor) {
        double total = valor * 0.95; // 5% de desconto
        System.out.println("Pago via Pix: R$" + total + " (com desconto)");
    }
}
