package com.abn.patterns.structural.facade;

/* GERAL

Adapter, Facade e Proxy parecem iguais à primeira vista — todos colocam algo no meio do caminho entre quem chama e quem executa.
A diferença está na intenção.

Adapter — o problema é incompatibilidade de interface.
Você tem dois sistemas que não falam a mesma língua. O Adapter traduz.

Facade — o problema é complexidade.
Você tem muitos subsistemas complicados. A Facade oferece uma entrada simples.

Proxy — o problema é controle de acesso ou custo.
Você quer interceptar o acesso a um objeto para fazer algo antes ou depois (cache, log, segurança).

A diferença mais importante: Adapter muda a interface. Facade simplifica várias interfaces. Proxy mantém a mesma interface mas intercepta o acesso.
 */

/*
Para abrir a pizzaria toda manhã, o gerente precisa: ligar o forno, verificar o estoque, ativar o sistema de pedidos,
ligar o caixa e notificar os entregadores. São 5 subsistemas diferentes, cada um com sua própria interface.
Situação sem Facade: o gerente precisa conhecer todos os subsistemas em detalhes e chamar cada um na ordem certa.
Se um novo funcionário assumir, precisa aprender tudo do zero. Se a ordem mudar, é necessário atualizar em vários lugares.

Solução: uma Facade com um único método abrirPizzaria() que encapsula toda a sequência internamente.

Diferença do Adapter: o Adapter serve para compatibilidade entre interfaces incompatíveis.
A Facade serve para simplificar um conjunto complexo de interfaces que já funcionam — mas que são trabalhosas de usar diretamente.

Onde você já viu isso: o Datasul/ERP inteiro é uma grande Facade — você chama uma rotina de faturamento e ela internamente aciona fiscal,
estoque, financeiro, contabilidade. Você não precisa saber a ordem de cada módulo.
 */

public class Main {

    public static void main(String[] args) {

        // USO — o gerente não precisa saber nada dos subsistemas
        PizzariaFacade pizzaria = new PizzariaFacade();
        pizzaria.abrirPizzaria();

        // === Abrindo a pizzaria ===
        // Forno aquecendo a 280°C
        // Estoque verificado — OK
        // Sistema de pedidos online
        // Caixa aberto
        // Entregadores notificados

        pizzaria.fecharPizzaria();
    }
}
