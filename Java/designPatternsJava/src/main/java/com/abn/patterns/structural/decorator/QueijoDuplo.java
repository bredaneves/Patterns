package com.abn.patterns.structural.decorator;

// DECORATORS CONCRETOS — cada um adiciona algo e delega o resto
public class QueijoDuplo extends ExtraPizza {

    public QueijoDuplo(Pizza pizza) {
        super(pizza);
    }

    public String getDescricao() {
        return pizza.getDescricao() + ", queijo duplo";
    }

    public double getPreco()     {
        return pizza.getPreco() + 6.0;
    }
}
