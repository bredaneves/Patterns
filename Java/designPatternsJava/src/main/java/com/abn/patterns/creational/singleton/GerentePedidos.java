package com.abn.patterns.creational.singleton;

import java.util.ArrayList;
import java.util.List;

public class GerentePedidos {

    // 1. A única instância fica guardada aqui — estática e privada
    private static GerentePedidos instancia = null;

    private List<String> fila = new ArrayList<>();

    // 2. Construtor PRIVADO — ninguém de fora pode chamar "new"
    private GerentePedidos() {}

    // 3. Ponto de acesso global — cria só se ainda não existe
    public static GerentePedidos getInstance() {
        if (instancia == null) {
            instancia = new GerentePedidos(); // cria UMA vez
        }
        return instancia; // sempre retorna a mesma
    }

    public void adicionarPedido(String pedido) {
        fila.add(pedido);
        System.out.println("Pedido adicionado: " + pedido);
    }

    public void mostrarFila() {
        System.out.println("Fila atual: " + fila);
    }

    /*Solução 1 — synchronized (simples, mas mais lento)
      Garante exclusividade, mas bloqueia todas as threads em cada chamada.
    public static synchronized GerentePedidos getInstance() {
        if (instancia == null) {
            instancia = new GerentePedidos();
        }
        return instancia;
    }

      Solução 2 — Double-checked locking (recomendada)
      Bloqueia só na criação. Depois, acesso sem custo.

    Javaprivate static volatile GerentePedidos instancia = null;

    public static GerentePedidos getInstance() {
        if (instancia == null) {                    // 1ª verificação — sem lock
            synchronized (GerentePedidos.class) {
                if (instancia == null) {             // 2ª verificação — com lock
                    instancia = new GerentePedidos();
                }
            }
        }
        return instancia;
    }

    Solução 3 — Initialization-on-demand (a mais elegante em Java)
    Thread-safe sem synchronized. Criação lazy. Sem volatile. Preferida.

    Javaclass GerentePedidos {
        private GerentePedidos() {}

        // A JVM garante que esta classe interna é carregada uma única vez
        private static class Holder {
            static final GerentePedidos INSTANCIA = new GerentePedidos();
        }

        public static GerentePedidos getInstance() {
            return Holder.INSTANCIA;
        }
    }

    */

}
