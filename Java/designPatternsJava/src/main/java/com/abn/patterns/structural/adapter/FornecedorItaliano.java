package com.abn.patterns.structural.adapter;

// Fornecedor italiano — interface incompatível, não podemos mudar
public class FornecedorItaliano {

    public void deliverInPounds(double lbs) {
        System.out.println("Delivering " + lbs + " lbs from Italy");
    }
}
