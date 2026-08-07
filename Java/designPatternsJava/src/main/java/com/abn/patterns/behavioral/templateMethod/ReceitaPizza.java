package com.abn.patterns.behavioral.templateMethod;

// CLASSE BASE — define o template (sequência fixa)
abstract class ReceitaPizza {

    // O TEMPLATE METHOD — final para ninguém mudar a ordem
    public final void preparar() {
        prepararMassa();
        adicionarMolho();
        adicionarIngredientes();
        assar();
        finalizar(); // hook — opcional, tem implementação padrão
    }

    // Etapas obrigatórias — subclasses devem implementar
    protected abstract void prepararMassa();
    protected abstract void adicionarMolho();
    protected abstract void adicionarIngredientes();

    // Etapa comum — igual para todas
    protected void assar() {
        System.out.println("Assando por 12 minutos a 280°C");
    }

    // Hook — subclasse pode sobrescrever ou não
    protected void finalizar() {
        System.out.println("Pizza pronta!");
    }
}
