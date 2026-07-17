package com.abn.patterns.structural.proxy;

// PROXY com cache — mesma interface, acesso controlado
public class FornecedorPremiumProxy implements FornecedorPremium {

    private FornecedorPremiumReal real;
    private String cache = null;

    public String consultarCardapio() {
        if (cache == null) {
            System.out.println("[PROXY] Cache vazio, consultando real...");
            if (real == null) real = new FornecedorPremiumReal(); // lazy
            cache = real.consultarCardapio();
        } else {
            System.out.println("[PROXY] Retornando do cache");
        }
        return cache;
    }
}
