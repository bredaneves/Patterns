package com.abn.patterns.structural.bridge;

public class Delivery implements CanalEntrega {

    public void entregar(String pizza) {
        System.out.println("[Delivery] Saindo para entrega: " + pizza);
    }
}
