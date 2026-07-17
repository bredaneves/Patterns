package com.abn.patterns.structural.facade;

// FACADE — esconde toda a complexidade atrás de métodos simples
public class PizzariaFacade {

    private final Forno          forno       = new Forno();
    private final Estoque        estoque     = new Estoque();
    private final SistemaPedidos pedidos     = new SistemaPedidos();
    private final Caixa          caixa       = new Caixa();
    private final Entregadores   entregadores = new Entregadores();

    void abrirPizzaria() {
        System.out.println("=== Abrindo a pizzaria ===");
        forno.ligar();
        estoque.verificar();
        pedidos.ativar();
        caixa.abrir();
        entregadores.notificar();
    }

    void fecharPizzaria() {
        System.out.println("=== Fechando a pizzaria ===");
        pedidos.desativar();
        caixa.fechar();
        forno.desligar();
    }
}
