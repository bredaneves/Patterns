package com.abn.patterns.structural.flyweight;

// CONTEXTO — representa cada entrega individualmente
public class Entrega {

    private TipoPizza tipo;     // referência ao flyweight
    private String endereco;     // estado extrínseco
    private String gps;          // estado extrínseco

    public Entrega(TipoPizza tipo, String endereco, String gps) {
        this.tipo = tipo;
        this.endereco = endereco;
        this.gps = gps;
    }

    void rastrear() {
        tipo.rastrear(endereco, gps);
    }
}
