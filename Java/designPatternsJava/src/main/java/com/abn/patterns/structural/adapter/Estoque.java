package com.abn.patterns.structural.adapter;

public class Estoque {

    void receberIngredientes(Fornecedor f, double kg) {
        f.entregarEmKg(kg); // sempre chama a mesma interface
    }
}
