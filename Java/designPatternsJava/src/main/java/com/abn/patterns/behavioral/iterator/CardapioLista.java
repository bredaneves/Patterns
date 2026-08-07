package com.abn.patterns.behavioral.iterator;

import java.util.ArrayList;
import java.util.List;

// OUTRA COLEÇÃO — internamente usa List (estrutura diferente)
public class CardapioLista implements Cardapio {

    private List<String> itens = new ArrayList<>();

    public void adicionar(String item) { itens.add(item); }

    public IteradorCardapio criarIterador() {
        return new IteradorLista(itens);
    }
}
