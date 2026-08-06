package com.abn.patterns.behavioral.state;

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

/*State — o problema
Um pedido na pizzaria passa por estados: Recebido → Preparando → Saiu para entrega → Entregue.
O que pode ser feito com o pedido muda completamente dependendo do estado — não dá pra cancelar um pedido que já saiu para entrega.

Sem State: o objeto Pedido fica cheio de ifs verificando o estado atual antes de cada operação:
if (estado == "recebido") { ... } else if (estado == "preparando") { ... }
Cada método tem esse bloco. Adicionar um novo estado exige abrir todos os métodos.

Com State: cada estado vira uma classe. O pedido delega o comportamento para o estado atual.
Quando o estado muda, o objeto passa a se comportar de forma completamente diferente — automaticamente.

Diferença chave do Strategy: no Strategy você troca o algoritmo conscientemente de fora.
No State o próprio objeto troca seu estado internamente conforme eventos acontecem.

Onde você já viu isso: workflow de NF-e no ERP — uma nota em estado "autorizada" não pode ser editada, em "digitação" pode.
Cada estado bloqueia ou libera operações diferentes. É State puro aplicado a processo fiscal.
 */

// USO
public class Main {

    public static void main(String[] args) {

        Pedido pedido = new Pedido();
        System.out.println(pedido.getEstado()); // Recebido
        pedido.avancar();                        // Pedido foi para a cozinha.
        pedido.avancar();                        // Pizza saiu para entrega.
        pedido.cancelar();                       // Não é possível cancelar — já saiu.
        pedido.avancar();                        // Pizza entregue!
    }
}
