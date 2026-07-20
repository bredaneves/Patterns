package com.abn.patterns.structural.flyweight;

import java.util.HashMap;
import java.util.Map;

// FÁBRICA DO FLYWEIGHT — garante que o mesmo tipo nunca é criado duas vezes
public class TipoPizzaFactory {

    private static Map<String, TipoPizza> cache = new HashMap<>();

    public static TipoPizza obter(String nome, String ingredientes, double preco) {
        if (!cache.containsKey(nome)) {
            System.out.println("[Factory] Criando TipoPizza: " + nome);
            cache.put(nome, new TipoPizza(nome, ingredientes, preco));
        }
        return cache.get(nome); // reutiliza o mesmo objeto
    }

    public static int totalCriados() {
        return cache.size();
    }
}
