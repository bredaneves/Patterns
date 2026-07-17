package com.abn.patterns.creational.prototype;

import java.util.HashMap;
import java.util.Map;

public class CardapioPizzas {

    private Map<String, PizzaPrototype> cardapio = new HashMap<>();

    public void registrar(String nome, PizzaPrototype pizza) {
        cardapio.put(nome, pizza);
    }

    public PizzaPrototype obter(String nome) {
        return (PizzaPrototype) cardapio.get(nome).clonar();
        // sempre retorna CÓPIA
    }
}
