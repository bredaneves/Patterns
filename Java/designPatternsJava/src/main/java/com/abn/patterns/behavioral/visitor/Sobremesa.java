package com.abn.patterns.behavioral.visitor;

// ELEMENTOS CONCRETOS — só sabem se aceitar e se identificar
public class Sobremesa implements ItemPedido {

    private String nome; private double preco;

    public Sobremesa(String nome, double preco) {
        this.nome=nome; this.preco=preco;
    }

    public String getNome()  {
        return nome;
    }

    public double getPreco() {
        return preco;
    }

    public void aceitar(Visitor v) {
        v.visitar(this);
    }
}
