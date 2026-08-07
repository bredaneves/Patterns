package com.abn.patterns.behavioral.iterator;

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

/* Iterator — o problema
A pizzaria tem um cardápio que internamente pode ser uma lista, um array ou até uma árvore de categorias.
O garçom precisa percorrer todos os itens para ler para o cliente — sem precisar saber como o cardápio está organizado por dentro.

Sem Iterator: o garçom precisa saber a estrutura interna do cardápio para percorrê-lo:
for (int i = 0; i < cardapio.tamanho(); i++) { cardapio.getItem(i); }
Se o cardápio mudar de lista para árvore, o código do garçom quebra. Ele está acoplado à estrutura interna.

Com Iterator: o cardápio fornece um iterador com hasNext() e next().
O garçom usa só esses dois métodos — não sabe e não precisa saber como os itens estão armazenados.

Contexto Java: esse padrão já está incorporado na linguagem.
Toda coleção que implementa Iterable fornece um Iterator — é exatamente o que o for-each usa internamente.
Você já usa Iterator todo dia sem perceber.

Na prática em Java: você raramente implementa Iterator do zero — usa as coleções do Java que já implementam o padrão.
O valor de estudar a implementação manual é entender por que o for-each funciona em qualquer coleção e como criar coleções customizadas percorríveis.
 */

// USO — o garçom usa o mesmo código para estruturas diferentes
public class Main {

    public static void main(String[] args) {

        CardapioArray c1 = new CardapioArray(5);
        c1.adicionar("Margherita"); c1.adicionar("Pepperoni"); c1.adicionar("Calabresa");

        CardapioLista c2 = new CardapioLista();
        c2.adicionar("Frango"); c2.adicionar("Vegetariana");

        Garcom garcom = new Garcom();
        garcom.lerCardapio(c1); // percorre array
        garcom.lerCardapio(c2); // percorre lista — mesmo código
    }
}
