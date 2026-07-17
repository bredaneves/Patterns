package com.abn.patterns.creational.factoryMethod;

public class PizzariaVegetariana extends Pizzaria {
    public Pizza criarPizza() {

        return new PizzaVegetariana();
    }
}
