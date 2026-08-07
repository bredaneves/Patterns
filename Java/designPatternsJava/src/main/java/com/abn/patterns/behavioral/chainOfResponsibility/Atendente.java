package com.abn.patterns.behavioral.chainOfResponsibility;

// HANDLERS CONCRETOS
public class Atendente extends AprovadorDesconto {

    public void aprovar(double valor) {
        if (valor <= 50) {
            System.out.println("[Atendente] Desconto de R$" + valor + " aprovado.");
        } else if (proximo != null) {
            System.out.println("[Atendente] Fora do meu limite. Escalando...");
            proximo.aprovar(valor);
        }
    }
}
