package com.abn.patterns.behavioral.command;

import java.util.ArrayDeque;
import java.util.Deque;

// INVOKER — registra e executa comandos, mantém histórico
public class Atendente {

    private Deque<Comando> historico = new ArrayDeque<>();

    public void executar(Comando cmd) {
        cmd.execute();
        historico.push(cmd);
    }

    public void desfazer() {
        if (!historico.isEmpty()) {
            historico.pop().undo();
        } else {
            System.out.println("Nada para desfazer.");
        }
    }
}
