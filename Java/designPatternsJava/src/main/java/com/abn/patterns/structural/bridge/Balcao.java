package com.abn.patterns.structural.bridge;

public class Balcao implements CanalEntrega {

    public void entregar(String pizza) {
        System.out.println("[Balcão] Entregando: " + pizza);
    }
}
