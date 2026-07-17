package com.abn.patterns.creational.abstractMethod;

class FabricaItaliana implements FabricaPizza {

    public FabricaItaliana() {
        System.out.println();
        System.out.println("Pizza italiana");
    }

    public Massa criarMassa() {
        return new MassaFina();
    }

    public Molho criarMolho() {
        return new MolhoSuave();
    }

    public Ingrediente criarIngrediente() {
        return new Mussarela();
    }
}
