package com.abn.patterns.creational.abstractMethod;

public class FabricaAmericana implements FabricaPizza {

    public FabricaAmericana() {
        System.out.println();
        System.out.println("Pizza americana");
    }

    public Massa criarMassa() {
        return new MassaGrossa();
    }

    public Molho criarMolho() {
        return new MolhoPicante();
    }

    public Ingrediente criarIngrediente() {
        return new Pepperoni();
    }
}
