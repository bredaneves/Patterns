package com.abn.patterns.structural.bridge;

// ABSTRAÇÃO — pizza (varia na outra dimensão)
// A pizza TEM um canal — não herda dele
abstract class Pizza {

    protected CanalEntrega canal; // a "ponte"

    public Pizza(CanalEntrega canal) {
        this.canal = canal;
    }

    abstract void preparar();
}
