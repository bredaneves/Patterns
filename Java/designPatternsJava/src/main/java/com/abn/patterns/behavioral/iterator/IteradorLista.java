package com.abn.patterns.behavioral.iterator;

import java.util.Iterator;
import java.util.List;

public class IteradorLista implements IteradorCardapio {

    private Iterator<String> it;
    public IteradorLista(List<String> itens) {
        it = itens.iterator();
    }

    public boolean hasNext() {
        return it.hasNext();
    }

    public String  next() {
        return it.next();
    }
}
