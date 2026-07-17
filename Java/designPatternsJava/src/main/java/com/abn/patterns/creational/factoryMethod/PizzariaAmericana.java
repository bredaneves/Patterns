package com.abn.patterns.creational.factoryMethod;

public class PizzariaAmericana extends Pizzaria {

    public Pizza criarPizza() {
        return new PizzaPepperoni();
    }
}
