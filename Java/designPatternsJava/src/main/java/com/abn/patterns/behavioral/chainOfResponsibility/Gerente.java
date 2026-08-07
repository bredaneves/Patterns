package com.abn.patterns.behavioral.chainOfResponsibility;

// HANDLERS CONCRETOS
public class Gerente extends AprovadorDesconto {

    public void aprovar(double valor) {
        System.out.println("[Gerente] Desconto de R$" + valor + " aprovado pelo gerente.");
    }
}
