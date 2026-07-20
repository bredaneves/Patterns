package com.abn.patterns.structural.decorator;

// DECORATORS CONCRETOS — cada um adiciona algo e delega o resto
public class MolhoEspecial extends ExtraPizza {

    public MolhoEspecial(Pizza pizza) {
        super(pizza);
    }

    public String getDescricao() {
        return pizza.getDescricao() + ", molho especial";
    }

    public double getPreco() {
        return pizza.getPreco() + 5.0;
    }
}
