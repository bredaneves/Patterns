package com.abn.patterns.behavioral.templateMethod;

// SUBCLASSE 1 — implementa só as etapas variáveis
public class PizzaMargherita extends ReceitaPizza {

    protected void prepararMassa() {
        System.out.println("Massa fina napolitana");
    }

    protected void adicionarMolho() {
        System.out.println("Molho de tomate suave");
    }

    protected void adicionarIngredientes() {
        System.out.println("Mussarela fresca e manjericão");
    }
}
