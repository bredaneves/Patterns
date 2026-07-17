package com.abn.patterns.creational.factoryMethod;

/*Problema: o sistema precisa criar uma pizza, mas não quer saber qual pizza.
Quem decide é a subclasse da pizzaria.*/

public class Main {

    public static void main(String[] args) {

        Pizzaria p = new PizzariaItaliana();
        p.fazerPedido();
        // → Pizza Margherita: massa fina...

        Pizzaria p2 = new PizzariaAmericana();
        p2.fazerPedido();
        // → Pizza Pepperoni: massa grossa...

        Pizzaria p3 = new PizzariaVegetariana();
        p3.fazerPedido();
        // → Pizza Vegetariana: massa integral...
    }
}
