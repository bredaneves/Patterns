package com.abn.patterns.creational.factoryMethod;

public class PizzariaItaliana extends Pizzaria {

    public Pizza criarPizza() {
        return new PizzaMargherita();
    }
}
