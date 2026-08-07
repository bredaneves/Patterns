package com.abn.patterns.behavioral.memento;

// MEMENTO — guarda o estado, não expõe nada
public class PedidoMemento {

    private final String pizza;
    private final String tamanho;
    private final double valor;

    // Construtor de pacote — só Pedido pode criar
    PedidoMemento(String pizza, String tamanho, double valor) {
        this.pizza   = pizza;
        this.tamanho = tamanho;
        this.valor   = valor;
    }

    // Getters de pacote — só Pedido pode ler
    String getPizza()   {
        return pizza;
    }

    String getTamanho() {
        return tamanho;
    }

    double getValor()   {
        return valor;
    }
}
