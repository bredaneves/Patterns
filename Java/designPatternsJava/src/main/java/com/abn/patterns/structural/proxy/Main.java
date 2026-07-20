package com.abn.patterns.structural.proxy;

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
Proxy — o problema
A pizzaria tem um fornecedor premium muito caro de consultar — cada consulta de cardápio cobra uma taxa.
O sistema consulta esse fornecedor repetidamente mesmo quando o cardápio não mudou.

Situação: o objeto real (FornecedorPremium) é caro de acessar — pode ser lento, pago, ou restrito.
Você quer controlar quando e como ele é acessado, sem mudar o código que o usa.
Solução: um Proxy que implementa a mesma interface do objeto real, mas adiciona cache, log ou controle de acesso antes de delegar.

Tipos comuns de Proxy
Virtual Proxy — cria o objeto real só quando realmente necessário (lazy loading).
Caching Proxy — guarda o resultado da última chamada e evita reconsultar o objeto real.
Protection Proxy — verifica permissões antes de deixar o acesso passar.
Logging Proxy — registra cada acesso para auditoria.

Diferença do Facade: a Facade simplifica múltiplos subsistemas numa interface nova.
O Proxy mantém a mesma interface do objeto original — quem usa não percebe que está falando com um intermediário.

Onde você já viu isso: o Spring usa Proxy extensivamente — quando você anota um método com @Transactional ou @Cacheable,
o Spring cria um proxy transparente em volta do seu bean que intercepta a chamada e gerencia transação ou cache antes de delegar ao método real.
 */

public class Main {

    public static void main(String[] args) {

        // USO — o sistema não sabe se está falando com real ou proxy
        FornecedorPremium fornecedor = new FornecedorPremiumProxy();

        fornecedor.consultarCardapio();
        // [PROXY] Cache vazio, consultando real...
        // [REAL] Consultando fornecedor italiano... (custoso!)

        fornecedor.consultarCardapio();
        // [PROXY] Retornando do cache  ← sem custo

        fornecedor.consultarCardapio();
        // [PROXY] Retornando do cache  ← sem custo
    }
}
