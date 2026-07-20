package com.abn.patterns.structural.decorator;

// DECORATOR BASE — implementa Pizza e tem uma Pizza dentro
abstract class ExtraPizza implements Pizza {

    protected Pizza pizza; // a pizza que está "debaixo"

    public ExtraPizza(Pizza pizza) {
        this.pizza = pizza;
    }
}
