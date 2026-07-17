package com.abn.patterns.structural.bridge;

public class Margherita extends Pizza {

    public Margherita(CanalEntrega canal) {
        super(canal);
    }

    public void preparar() {
        canal.entregar("Margherita");
    }
}
