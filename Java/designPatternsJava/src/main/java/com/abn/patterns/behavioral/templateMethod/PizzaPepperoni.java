package com.abn.patterns.behavioral.templateMethod;

// SUBCLASSE 2 — diferente em cada etapa, e sobrescreve o hook
public class PizzaPepperoni extends ReceitaPizza {

    protected void prepararMassa() {
        System.out.println("Massa grossa americana");
    }

    protected void adicionarMolho() {
        System.out.println("Molho picante");
    }

    protected void adicionarIngredientes() {
        System.out.println("Pepperoni e cheddar");
    }

    // Sobrescreve o hook para adicionar etapa extra
    protected void finalizar() {
        System.out.println("Adicionando orégano por cima.");
        super.finalizar();
    }
}
