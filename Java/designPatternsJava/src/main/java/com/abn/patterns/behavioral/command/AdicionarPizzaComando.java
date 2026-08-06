package com.abn.patterns.behavioral.command;

// COMMAND CONCRETO
public class AdicionarPizzaComando implements Comando {

    private Comanda comanda;
    private String pizza;

    public AdicionarPizzaComando(Comanda comanda, String pizza) {
        this.comanda = comanda;
        this.pizza = pizza;
    }

    public void execute() {
        comanda.adicionarItem(pizza);
    }

    public void undo()    {
        comanda.removerItem(pizza);
    }
}
