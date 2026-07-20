package com.abn.patterns.structural.decorator;

// DECORATORS CONCRETOS — cada um adiciona algo e delega o resto
public class BordaRecheada extends ExtraPizza {

    public BordaRecheada(Pizza pizza) {
        super(pizza);
    }

    public String getDescricao() {
        return pizza.getDescricao() + ", borda recheada";
    }

    public double getPreco() {
        return pizza.getPreco() + 8.0;
    }
}
