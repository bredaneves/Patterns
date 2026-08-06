package com.abn.patterns.behavioral.strategy;

// CONTEXTO — o caixa não sabe qual estratégia está usando
public class Caixa {

    private FormaPagamento formaPagamento;

    // Estratégia pode ser trocada em tempo de execução
    public void setFormaPagamento(FormaPagamento forma) {
        this.formaPagamento = forma;
    }

    public void finalizarPedido(double valor) {
        formaPagamento.pagar(valor);
    }
}
