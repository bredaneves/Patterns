package com.abn.patterns.behavioral.observer;

/* GERAL

Os três padrões de comunicação — por que confundem?
Observer, Mediator e Chain of Responsibility todos tratam de como objetos se comunicam.
A diferença está em quem conhece quem e como a mensagem flui.

Observer — um objeto notifica vários interessados quando algo muda.
Comunicação 1 → N. Os observadores se inscrevem para receber eventos.

Mediator — objetos não se comunicam diretamente; passam por um intermediário central.
Comunicação N → 1 → N. Reduz o acoplamento entre componentes.

Chain of Responsibility — a requisição passa por uma cadeia de handlers até alguém tratá-la.
Comunicação linear. Cada handler decide processar ou passar adiante.

Pedido pronto → notifica → Cozinha + Entregador + Cliente (Observer)
Atendente + Cozinha + Caixa → falam com → Gerente → coordena todos (Mediator)
Pedido especial → Atendente → Supervisor → Gerente (Chain)

Pergunta de decisão:
"Vários interessados precisam reagir ao mesmo evento?" → Observer
"Muitos componentes se comunicam e estão acoplados demais entre si?" → Mediator
"A requisição deve percorrer uma hierarquia até alguém resolvê-la?" → Chain of Responsibility
 */

/* Observer — o problema
Quando um pedido fica pronto na cozinha, vários setores precisam saber:
o entregador para buscar, o caixa para liberar cobrança, o cliente para rastrear.
Como notificar todos sem a cozinha conhecer cada um deles?

Sem Observer: a cozinha chama cada setor diretamente:
entregador.buscarPizza(); caixa.liberarCobranca(); cliente.notificar();
Problema: a cozinha está acoplada a todos. Adicionar um novo interessado (ex: sistema de estoque) exige abrir o código da cozinha.

Com Observer: a cozinha apenas dispara um evento "pedido pronto".
Quem quiser saber se inscreve. A cozinha não conhece nenhum dos interessados — só sabe que existe uma lista de observadores para notificar.

Papéis
Subject (Cozinha) → notifica → Observer 1 (Entregador) + Observer 2 (Caixa) + Observer 3 (Cliente)
 */

// USO
public class Main {

    public static void main(String[] args) {

        Cozinha cozinha = new Cozinha();
        cozinha.inscrever(new Entregador());
        cozinha.inscrever(new Caixa());
        cozinha.inscrever(new ClienteApp());

        cozinha.pedidoPronto("Pizza Margherita");
        // [Cozinha] Pedido pronto: Pizza Margherita
        // [Entregador] Buscando: Pizza Margherita
        // [Caixa] Liberando cobrança: Pizza Margherita
        // [App] Notificando cliente: Pizza Margherita
    }
}
