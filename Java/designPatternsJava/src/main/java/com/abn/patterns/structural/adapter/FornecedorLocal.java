package com.abn.patterns.structural.adapter;

// Fornecedor local — já funciona direto
public class FornecedorLocal implements Fornecedor {

    public void entregarEmKg(double kg) {
        System.out.println("Entregando " + kg + "kg localmente");
    }
}
