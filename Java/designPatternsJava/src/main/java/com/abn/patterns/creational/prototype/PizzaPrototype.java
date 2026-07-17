package com.abn.patterns.creational.prototype;

public class PizzaPrototype implements Clonavel {

    private String tamanho;
    private String massa;
    private String molho;
    private String queijo;
    private String ingrediente;

    public PizzaPrototype(String tamanho, String massa, String molho,
                          String queijo, String ingrediente) {
        this.tamanho     = tamanho;
        this.massa       = massa;
        this.molho       = molho;
        this.queijo      = queijo;
        this.ingrediente = ingrediente;
    }

    // Construtor de cópia — usado pelo clonar()
    private PizzaPrototype(PizzaPrototype outra) {
        this.tamanho     = outra.tamanho;
        this.massa       = outra.massa;
        this.molho       = outra.molho;
        this.queijo      = outra.queijo;
        this.ingrediente = outra.ingrediente;
    }

    @Override
    public Clonavel clonar() {
        return new PizzaPrototype(this);
    }

    public void setIngrediente(String ingrediente) {
        this.ingrediente = ingrediente;
    }

    public void setTamanho(String tamanho) {
        this.tamanho = tamanho;
    }

    public void descrever() {
        System.out.println("Pizza " + tamanho + ", " + massa + ", "
                + molho + ", " + queijo + ", " + ingrediente);
    }
}
