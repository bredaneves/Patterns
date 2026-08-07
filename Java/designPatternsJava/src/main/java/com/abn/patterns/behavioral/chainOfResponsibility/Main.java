package com.abn.patterns.behavioral.chainOfResponsibility;

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

/* Chain of Responsibility — o problema
A pizzaria tem uma política de descontos: pedidos até R$50 o atendente aprova; até R$100 o supervisor aprova; acima disso só o gerente.
Cada nível só escalona se não puder tratar.

Sem Chain: um único método com vários ifs aninhados, ou o solicitante precisa saber exatamente quem chamar dependendo do valor.
O código de quem pede o desconto fica acoplado à hierarquia de aprovação.

Com Chain: cada aprovador sabe seu limite. Se puder tratar, trata. Se não puder, passa para o próximo na cadeia.
O solicitante só conhece o primeiro da cadeia — não sabe quem vai resolver.

Diferença do Mediator: no Mediator há um centro que conhece todos e coordena.
Na Chain não há centro — a requisição percorre a cadeia linearmente e cada handler decide se processa ou passa adiante.
Pode não chegar ao final.

Fluxo
Pedido de desconto → Atendente (até R$50) → não pode → Supervisor (até R$100) → não pode → Gerente (sem limite)
 */

// USO — monta a cadeia e só aciona o primeiro
public class Main {

    public static void main(String[] args) {

        Atendente  atendente  = new Atendente();
        Supervisor supervisor = new Supervisor();
        Gerente    gerente    = new Gerente();

        // Encadeamento fluente
        atendente.setProximo(supervisor).setProximo(gerente);

        atendente.aprovar(30);
        // [Atendente] Desconto de R$30.0 aprovado.

        atendente.aprovar(80);
        // [Atendente] Fora do meu limite. Escalando...
        // [Supervisor] Desconto de R$80.0 aprovado.

        atendente.aprovar(200);
        // [Atendente] Fora do meu limite. Escalando...
        // [Supervisor] Fora do meu limite. Escalando...
        // [Gerente] Desconto de R$200.0 aprovado pelo gerente.
    }
}
