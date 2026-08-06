package com.abn.patterns.behavioral.command;

import java.util.ArrayList;
import java.util.List;

// RECEIVER — quem realmente sabe fazer a operação
public class Comanda {

    private List<String> itens = new ArrayList<>();

    public void adicionarItem(String item) {
        itens.add(item);
        System.out.println("[Comanda] Adicionado: " + item);
    }

    public void removerItem(String item) {
        itens.remove(item);
        System.out.println("[Comanda] Removido: " + item);
    }

    public void mostrar() {
        System.out.println("Comanda atual: " + itens);
    }
}
