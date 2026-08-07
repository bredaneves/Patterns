package com.abn.patterns.behavioral.memento;

import java.util.ArrayDeque;
import java.util.Deque;

// CARETAKER — armazena os mementos, não sabe o que está dentro
public class HistoricoPedido {

    private Deque<PedidoMemento> historico = new ArrayDeque<>();

    public void salvar(PedidoMemento m) { historico.push(m); }

    public PedidoMemento desfazer() {
        return historico.isEmpty() ? null : historico.pop();
    }
}
