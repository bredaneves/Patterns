package com.abn.patterns.structural.adapter;

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
Adapter — o problema
A pizzaria sempre trabalhou com fornecedores locais que entregam ingredientes em kg.
Chegou um fornecedor italiano premium que trabalha só com libras (lb). O sistema de estoque não entende libras.

Situação: o sistema de estoque espera um objeto com o método entregarEmKg().
O fornecedor italiano só tem deliverInPounds(). Você não pode mudar nenhum dos dois — o estoque é legado e o fornecedor é externo.
Solução: criar um Adapter que "traduz" a chamada — recebe entregarEmKg(), converte para libras, e chama deliverInPounds().

Regra de ouro: use Adapter quando você tem código que não pode mudar dos dois lados e precisa fazê-los conversar.
É o padrão do "plug de tomada" — você não muda a tomada nem o aparelho, só usa um adaptador.

O estoque nunca soube da conversão. O Adapter absorveu toda a incompatibilidade.
Isso é exatamente o que acontece quando você integra APIs externas com sistemas legados — contexto que você conhece bem do mundo ERP.
 */

public class Main {

    public static void main(String[] args) {

        Estoque estoque = new Estoque();

        estoque.receberIngredientes(new FornecedorLocal(), 10);
        // → Entregando 10.0kg localmente

        estoque.receberIngredientes(
                new FornecedorItalianoAdapter(new FornecedorItaliano()), 10);
        // → Delivering 22.05 lbs from Italy

    }
}
