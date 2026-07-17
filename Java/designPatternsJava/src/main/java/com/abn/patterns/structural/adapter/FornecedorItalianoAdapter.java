package com.abn.patterns.structural.adapter;

// ADAPTER — traduz kg → lbs e delega ao italiano
public class FornecedorItalianoAdapter implements Fornecedor {

    private FornecedorItaliano italiano;

    public FornecedorItalianoAdapter(FornecedorItaliano italiano) {
        this.italiano = italiano;
    }

    public void entregarEmKg(double kg) {
        double lbs = kg * 2.205; // conversão
        italiano.deliverInPounds(lbs);
    }
}
