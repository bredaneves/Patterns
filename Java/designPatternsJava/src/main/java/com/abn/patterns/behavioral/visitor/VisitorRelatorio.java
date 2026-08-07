package com.abn.patterns.behavioral.visitor;

// VISITOR 2 — gera relatório simples
public class VisitorRelatorio implements Visitor {

    public void visitar(Pizza p) {
        System.out.println("[PIZZA]     "+p.getNome()+" R$"+p.getPreco());
    }

    public void visitar(Bebida b) {
        System.out.println("[BEBIDA]    "+b.getNome()+" R$"+b.getPreco());
    }

    public void visitar(Sobremesa s) {
        System.out.println("[SOBREMESA] "+s.getNome()+" R$"+s.getPreco());
    }

}
