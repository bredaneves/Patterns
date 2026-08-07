package com.abn.patterns.behavioral.mediator;

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

/* Mediator — o problema
A pizzaria tem vários setores que precisam se coordenar: atendente registra pedido, cozinha precisa saber,
entregador precisa ser acionado, caixa precisa cobrar. Se todos se comunicam diretamente entre si, vira uma teia de dependências.

Sem Mediator: cada setor conhece todos os outros diretamente.
Atendente chama Cozinha. Cozinha chama Entregador. Entregador chama Caixa. Caixa chama Cliente.
Com 5 setores se comunicando livremente = até 20 conexões diretas. Mudar qualquer um impacta todos os outros.

Com Mediator: nenhum setor conhece os outros. Todos falam com o Gerente (mediador), que coordena quem deve ser notificado.
Adicionar um novo setor = só registrar no Gerente.

Diferença do Observer: no Observer há um subject que notifica N observers — ainda é uma relação direta 1→N.
No Mediator, ninguém se comunica diretamente com ninguém — tudo passa pelo mediador central, que decide o fluxo.

Onde você já viu isso: o barramento de eventos de um ERP é um Mediator — módulos disparam eventos sem saber quem vai processar.
No front-end, o padrão Flux/Redux é Mediator puro. Em microsserviços, o API Gateway centraliza a comunicação entre serviços como um Mediator.
 */

// USO
public class Main {

    public static void main(String[] args) {

        GerentePizzaria gerente = new GerentePizzaria();
        gerente.atendente  = new Atendente(gerente);
        gerente.cozinha    = new Cozinha(gerente);
        gerente.entregador = new Entregador(gerente);
        gerente.caixa      = new Caixa(gerente);

        gerente.atendente.registrarPedido("Pizza Calabresa");
        // [Atendente] Registrando pedido: Pizza Calabresa
        // [Cozinha] Preparando: Pizza Calabresa
        // [Entregador] Saindo com: Pizza Calabresa
        // [Caixa] Cobrança efetuada: Pizza Calabresa
    }
}
