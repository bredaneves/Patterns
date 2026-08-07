package com.abn.patterns.behavioral.visitor;

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

/* Visitor — o problema
A pizzaria tem diferentes tipos de itens no pedido: pizzas, bebidas e sobremesas.
O sistema precisa fazer várias operações sobre esses itens — calcular imposto, gerar relatório, exportar para XML.
Mas não quer adicionar esses métodos nas classes de item a cada nova necessidade.

Sem Visitor: cada nova operação (calcular imposto, exportar, auditoria) exige abrir todas as classes de item e adicionar um método novo.
Com o tempo as classes Pizza, Bebida e Sobremesa ficam cheias de responsabilidades que não são delas.

Com Visitor: cada operação vira um Visitor separado.
Os itens do pedido só precisam de um método aceitar(visitor) — o visitor é quem carrega a lógica.
Adicionar uma nova operação = criar um novo Visitor, sem tocar nas classes existentes.

O truque do double dispatch: quando você chama item.aceitar(visitor), o item chama de volta visitor.visitar(this).
Isso garante que a versão correta do visitar() seja chamada para cada tipo de item — sem if/instanceof.

Onde você já viu isso: compiladores usam Visitor para percorrer a árvore sintática e executar operações diferentes
(validação, geração de código, otimização) sem modificar os nós da árvore.
No mundo ERP, operações de auditoria, exportação fiscal e geração de relatórios sobre os mesmos objetos de domínio são candidatos naturais ao Visitor.
 */

import java.util.List;

// USO — mesmo pedido, dois visitors diferentes
public class Main {

    public static void main(String[] args) {

        List<ItemPedido> pedido = List.of(
                new Pizza("Margherita", 45.0),
                new Bebida("Suco", 12.0),
                new Sobremesa("Tiramisu", 18.0)
        );

        System.out.println("=== Impostos ===");
        Visitor imposto = new VisitorImposto();
        pedido.forEach(item -> item.aceitar(imposto));

        System.out.println("=== Relatório ===");
        Visitor relatorio = new VisitorRelatorio();
        pedido.forEach(item -> item.aceitar(relatorio));

    }
}
