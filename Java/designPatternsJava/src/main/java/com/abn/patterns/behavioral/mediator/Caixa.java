package com.abn.patterns.behavioral.mediator;

// SETORES CONCRETOS — nenhum conhece os outros
public class Caixa extends Setor {

    public Caixa(Mediator m) {
        super(m);
    }

    public void cobrar(String pedido) {
        System.out.println("[Caixa] Cobrança efetuada: " + pedido);
    }
}
