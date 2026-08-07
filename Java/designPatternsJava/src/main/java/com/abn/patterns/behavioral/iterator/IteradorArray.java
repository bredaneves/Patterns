package com.abn.patterns.behavioral.iterator;

// ITERATOR CONCRETO — sabe como percorrer o array
public class IteradorArray implements IteradorCardapio {

    private String[] itens;
    private int tamanho;
    private int posicao = 0;

    public IteradorArray(String[] itens, int tamanho) {
        this.itens = itens; this.tamanho = tamanho;
    }
    public boolean hasNext() { return posicao < tamanho; }
    public String  next()    { return itens[posicao++]; }
}
