package com.abn.patterns.creational.abstractMethod;

// === ABSTRACT FACTORY ===
public interface FabricaPizza {

    Massa criarMassa();
    Molho criarMolho();
    Ingrediente criarIngrediente();
}
