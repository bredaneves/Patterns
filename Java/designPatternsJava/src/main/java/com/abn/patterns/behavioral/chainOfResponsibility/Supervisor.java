package com.abn.patterns.behavioral.chainOfResponsibility;

// HANDLERS CONCRETOS
public class Supervisor extends AprovadorDesconto {

    public void aprovar(double valor) {
        if (valor <= 100) {
            System.out.println("[Supervisor] Desconto de R$" + valor + " aprovado.");
        } else if (proximo != null) {
            System.out.println("[Supervisor] Fora do meu limite. Escalando...");
            proximo.aprovar(valor);
        }
    }
}
