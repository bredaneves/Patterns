package com.abn.patterns.creational.factoryMethod;

public abstract class Pizzaria {

    // Este é o Factory Method — subclasses decidem QUAL pizza criar
    abstract Pizza criarPizza();

    void fazerPedido() {

        Pizza pizza = criarPizza();

        // não sabe qual — não importa
        pizza.preparar();

        System.out.println("Pedido pronto!");
    }
}
