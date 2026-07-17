package com.abn.patterns.structural.proxy;

// Objeto real — caro para consultar
public class FornecedorPremiumReal implements FornecedorPremium {

    public String consultarCardapio() {
        System.out.println("[REAL] Consultando fornecedor italiano... (custoso!)");
        // Simula chamada cara (API paga, rede lenta...)
        return "Cardápio: Burrata, Prosciutto, Tartufo";
    }
}
