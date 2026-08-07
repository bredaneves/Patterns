package com.abn.patterns.behavioral.memento;

/* GERAL

Os quatro últimos — cada um com problema bem distinto
Diferente dos grupos anteriores, esses quatro raramente se confundem entre si — cada um resolve um problema bastante específico.

Iterator — percorrer uma coleção sem expor sua estrutura interna.
"Quero varrer o cardápio sem saber se ele é uma lista, árvore ou array."

Memento — salvar e restaurar o estado de um objeto sem violar seu encapsulamento.
"Quero desfazer as alterações do pedido voltando ao estado anterior."

Template Method — definir o esqueleto de um algoritmo, deixando etapas específicas para subclasses.
"Toda pizza segue os mesmos passos de preparo, mas cada tipo tem sua variação."

Visitor — adicionar operações a objetos sem modificar suas classes.
"Quero calcular imposto, gerar relatório e exportar XML do pedido — sem tocar na classe Pedido."
 */

/*Memento — o problema
O atendente está montando um pedido personalizado com o cliente.
O cliente muda de ideia várias vezes e quer desfazer as últimas alterações.
O sistema precisa restaurar estados anteriores sem expor os detalhes internos do pedido.

Sem Memento: para salvar o estado, você expõe todos os atributos internos do objeto — getters para cada campo — e os armazena fora.
Isso quebra o encapsulamento: quem salva precisa conhecer a estrutura interna do objeto.
E se o objeto tiver campos privados que não devem ser acessados externamente?

Com Memento: o próprio objeto cria um "instantâneo" de si mesmo (o Memento) que guarda seu estado interno.
Quem armazena o Memento não consegue ler nem modificar o que está dentro — só devolve para o objeto quando precisar restaurar.

Diferença do Command: Command armazena a ação para desfazê-la executando a operação inversa.
Memento armazena o estado completo do objeto — não precisa saber qual operação foi feita, só restaura o snapshot.

Onde você já veu isso: editores de texto com histórico de desfazer, ferramentas de design com Ctrl+Z, jogos com sistema de save/load.
Em ERP, o conceito de "rascunho de nota fiscal" que pode ser restaurado para um estado anterior segue essa lógica.
 */

// USO
public class Main {

    public static void main(String[] args) {

        Pedido          pedido    = new Pedido();
        HistoricoPedido historico = new HistoricoPedido();

        pedido.configurar("Margherita", "média", 40.0);
        historico.salvar(pedido.salvar()); // snapshot 1
        pedido.mostrar(); // Pedido: Margherita (média) R$40.0

        pedido.configurar("Pepperoni", "grande", 55.0);
        historico.salvar(pedido.salvar()); // snapshot 2
        pedido.mostrar(); // Pedido: Pepperoni (grande) R$55.0

        pedido.configurar("Calabresa", "família", 70.0);
        pedido.mostrar(); // Pedido: Calabresa (família) R$70.0

        // Cliente se arrependeu — desfaz
        pedido.restaurar(historico.desfazer());
        pedido.mostrar(); // Pedido: Pepperoni (grande) R$55.0

        pedido.restaurar(historico.desfazer());
        pedido.mostrar(); // Pedido: Margherita (média) R$40.0
    }
}
