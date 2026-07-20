package com.abn.patterns.structural.flyweight;

// FLYWEIGHT — estado intrínseco, compartilhado e imutável
public class TipoPizza {

    private final String nome;
    private final String ingredientes;
    private final double precoBase;

    public TipoPizza(String nome, String ingredientes, double precoBase) {
        this.nome = nome;
        this.ingredientes = ingredientes;
        this.precoBase = precoBase;
    }

    // Recebe o estado extrínseco como parâmetro
    void rastrear(String endereco, String gps) {
        System.out.println("[Rastreio] " + nome + " → " + endereco + " (" + gps + ")");
    }
}
