package com.abn.patterns.structural.composite;

// FOLHA — item simples, sem filhos
public class PizzaItem implements ItemPedido {

    private String nome;
    private double preco;

    public PizzaItem(String nome, double preco) {
        this.nome = nome; this.preco = preco;
    }

    public double getPreco() {
        return preco;
    }

    public void   descrever(String indent) {
        System.out.println(indent + nome + " R$" + preco);
    }
}
