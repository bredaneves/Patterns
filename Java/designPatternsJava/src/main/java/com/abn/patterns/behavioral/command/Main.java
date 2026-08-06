package com.abn.patterns.behavioral.command;

/* GERAL
Strategy, State e Command todos encapsulam comportamento num objeto. A diferença está em quem decide qual comportamento usar e quando.

Strategy — o comportamento varia por escolha do cliente.
"Quero pagar de um jeito diferente" — você troca o algoritmo conscientemente.

State — o comportamento varia porque o objeto mudou de estado interno.
"O pedido está em estados diferentes" — o próprio objeto muda de comportamento automaticamente.

Command — o comportamento é encapsulado como objeto para ser enfileirado, desfeito ou registrado.
"Quero guardar o que foi feito para desfazer depois" — a ação vira um objeto.

Cliente escolhe forma de pagamento → Strategy
Pedido muda de estado sozinho → State
Ação vira objeto para desfazer/enfileirar → Command

Pergunta de decisão:
"Quero trocar o algoritmo de fora?" → Strategy
"O objeto muda de comportamento conforme seu estado interno?" → State
"Preciso desfazer, enfileirar ou registrar ações?" → Command
 */

/*Command — o problema
A pizzaria quer um sistema onde o atendente registra pedidos numa comanda — e se errar, pode desfazer o último lançamento.
Também quer enfileirar pedidos para a cozinha processar na ordem certa.

Sem Command: a ação é executada diretamente e não existe histórico.
Não há como desfazer, repetir ou enfileirar — a operação aconteceu e acabou.

Com Command: cada ação vira um objeto com execute() e undo().
Você pode guardar esses objetos numa lista, executar em ordem, desfazer o último, ou reenviar para outra fila.

Diferença do Strategy: Strategy troca o algoritmo de processamento.
Command encapsula a requisição em si — quem chamou, o quê pediu, com quais parâmetros — para poder guardar, desfazer ou reenviar.

Onde você já viu isso: Ctrl+Z em qualquer editor é Command.
Filas de mensagens (RabbitMQ, Kafka) tratam cada mensagem como um Command.
No ERP, lançamentos contábeis que podem ser estornados seguem essa lógica — a operação inversa é o undo().
 */

// USO
public class Main {

    public static void main(String[] args) {

        Comanda   comanda   = new Comanda();
        Atendente atendente = new Atendente();

        atendente.executar(new AdicionarPizzaComando(comanda, "Margherita"));
        atendente.executar(new AdicionarPizzaComando(comanda, "Pepperoni"));
        comanda.mostrar(); // [Margherita, Pepperoni]

        atendente.desfazer(); // Remove Pepperoni
        comanda.mostrar(); // [Margherita]

        atendente.desfazer(); // Remove Margherita
        comanda.mostrar(); // []
    }
}
