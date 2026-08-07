package com.abn.patterns.behavioral.iterator;

// COLEÇÃO CONCRETA — internamente usa array
public class CardapioArray implements Cardapio {

    private String[] itens;
    private int tamanho = 0;

    public CardapioArray(int capacidade) { itens = new String[capacidade]; }

    public void adicionar(String item) { itens[tamanho++] = item; }

    public IteradorCardapio criarIterador() {
        return new IteradorArray(itens, tamanho);
    }
}
