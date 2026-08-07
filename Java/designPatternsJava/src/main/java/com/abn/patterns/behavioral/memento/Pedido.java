package com.abn.patterns.behavioral.memento;

// ORIGINATOR — o objeto que sabe criar e restaurar seu próprio snapshot
public class Pedido {

    private String pizza;
    private String tamanho;
    private double valor;

    public void configurar(String pizza, String tamanho, double valor) {
        this.pizza   = pizza;
        this.tamanho = tamanho;
        this.valor   = valor;
    }

    // Cria o snapshot — sem expor atributos privados
    public PedidoMemento salvar() {
        return new PedidoMemento(pizza, tamanho, valor);
    }

    // Restaura a partir do snapshot
    public void restaurar(PedidoMemento m) {
        this.pizza   = m.getPizza();
        this.tamanho = m.getTamanho();
        this.valor   = m.getValor();
    }

    public void mostrar() {
        System.out.println("Pedido: " + pizza + " (" + tamanho + ") R$" + valor);
    }
}
