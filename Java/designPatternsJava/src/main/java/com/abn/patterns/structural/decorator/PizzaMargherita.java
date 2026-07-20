package com.abn.patterns.structural.decorator;

// COMPONENTE CONCRETO — pizza base
public class PizzaMargherita implements Pizza {

    public String getDescricao() {
        return "Margherita";
    }

    public double getPreco()     {
        return 40.0;
    }
}
