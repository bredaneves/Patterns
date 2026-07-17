package com.abn.patterns.structural.bridge;

public class Pepperoni extends Pizza {

    public Pepperoni(CanalEntrega canal) {
        super(canal);
    }

    public void preparar() {
        canal.entregar("Pepperoni");
    }
}
