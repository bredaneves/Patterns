package com.abn.patterns.structural.composite;

import java.util.ArrayList;
import java.util.List;

// COMPOSTO — pode conter outros ItemPedido (inclusive outros Combos)
public class Combo implements ItemPedido {

    private String nome;
    private List<ItemPedido> itens = new ArrayList<>();

    public Combo(String nome) {
        this.nome = nome;
    }

    public void adicionar(ItemPedido item) {
        itens.add(item);
    }

    public double getPreco() {
        return itens.stream().mapToDouble(ItemPedido::getPreco).sum();
    }

    public void descrever(String indent) {
        System.out.println(indent + "[Combo] " + nome + " R$" + getPreco());
        itens.forEach(i -> i.descrever(indent + "  "));
    }
}
