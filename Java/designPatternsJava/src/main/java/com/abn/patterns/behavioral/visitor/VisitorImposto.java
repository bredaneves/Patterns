package com.abn.patterns.behavioral.visitor;

// VISITOR 1 — calcula imposto por tipo de item
public class VisitorImposto implements Visitor {

    public void visitar(Pizza p) {
        System.out.println("Imposto pizza '"+p.getNome()+"': R$"+p.getPreco()*0.12);
    }

    public void visitar(Bebida b) {
        System.out.println("Imposto bebida '"+b.getNome()+"': R$"+b.getPreco()*0.20);
    }

    public void visitar(Sobremesa s) {
        System.out.println("Imposto sobremesa '"+s.getNome()+"': R$"+s.getPreco()*0.08);
    }
}
