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
}
