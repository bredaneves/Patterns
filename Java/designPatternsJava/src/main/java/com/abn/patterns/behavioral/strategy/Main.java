package com.abn.patterns.behavioral.strategy;

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

/* Strategy — o problema
A pizzaria aceita diferentes formas de pagamento: dinheiro, cartão e Pix.
O cálculo muda em cada caso — dinheiro pode ter troco, cartão tem taxa, Pix tem desconto.

Sem Strategy: um único método cheio de if/else:
if (forma == "dinheiro") ... else if (forma == "cartão") ... else if (forma == "pix") ...
Toda vez que surge uma nova forma de pagamento, você abre esse método e arrisca quebrar as que já funcionam. Viola o princípio Open/Closed.

Com Strategy: cada algoritmo de pagamento vira uma classe separada. O caixa não sabe qual está usando — só chama pagar().
Trocar a forma de pagamento é trocar o objeto.

Estrutura
Caixa → usa → FormaPagamento (interface) ← implementado por → Dinheiro / Cartão / Pix

Onde você já viu isso: Comparator do Java é Strategy puro — você passa o algoritmo de comparação como objeto.
No Spring, qualquer bean que implementa uma interface e é injetado via @Autowired dependendo do perfil é Strategy.
 */

public class Main {

    public static void main(String[] args) {

        // USO
        Caixa caixa = new Caixa();

        caixa.setFormaPagamento(new PagamentoPix());
        caixa.finalizarPedido(50.0); // Pago via Pix: R$47.5 (com desconto)

        caixa.setFormaPagamento(new PagamentoCartao());
        caixa.finalizarPedido(50.0); // Pago no cartão: R$51.5 (com taxa)

    }
}
