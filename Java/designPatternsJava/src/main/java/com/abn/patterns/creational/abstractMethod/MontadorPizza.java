package com.abn.patterns.creational.abstractMethod;

// === MONTADOR — usa a fábrica sem saber qual é ===
public class MontadorPizza {

    private FabricaPizza fabrica;

    MontadorPizza(FabricaPizza fabrica) {
        this.fabrica = fabrica;
    }

    void montar() {
        fabrica.criarMassa().descrever();
        fabrica.criarMolho().descrever();
        fabrica.criarIngrediente().descrever();
    }
}
