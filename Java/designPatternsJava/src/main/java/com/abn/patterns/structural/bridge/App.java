package com.abn.patterns.structural.bridge;

public class App implements CanalEntrega {

    public void entregar(String pizza) {
        System.out.println("[App] Notificando cliente: " + pizza);
    }
}
