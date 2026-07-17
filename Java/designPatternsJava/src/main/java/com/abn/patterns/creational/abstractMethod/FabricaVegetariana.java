package com.abn.patterns.creational.abstractMethod;

public class FabricaVegetariana implements FabricaPizza {

    public FabricaVegetariana() {
        System.out.println();
        System.out.println("Pizza vegetariana");
    }

    public Massa criarMassa() {
        return new MassaIntegral();
    }

    public Molho criarMolho() {
        return new MolhoErvas();
    }

    public Ingrediente criarIngrediente() {
        return new LegunesTostados();
    }
}
