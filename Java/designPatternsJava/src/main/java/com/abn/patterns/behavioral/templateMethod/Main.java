package com.abn.patterns.behavioral.templateMethod;

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

/* Template Method — o problema
Toda pizza passa pelos mesmos passos de preparo: preparar a massa, adicionar o molho, adicionar os ingredientes e assar.
Mas cada tipo de pizza faz cada etapa de forma diferente. Como evitar duplicar a sequência em cada classe?

Sem Template Method: cada tipo de pizza implementa o processo completo do zero.
A sequência de passos fica duplicada em cada classe — e se a ordem mudar, você precisa atualizar todas.

Com Template Method: a classe base define a sequência (o "template") num método final.
As subclasses só implementam as etapas variáveis — não podem mudar a ordem, só o conteúdo de cada passo.

Diferença do Strategy: Strategy troca o algoritmo inteiro substituindo o objeto.
Template Method mantém o esqueleto fixo na superclasse e só permite variar etapas específicas via herança.
Strategy usa composição; Template Method usa herança.

Onde você já viu isso: frameworks de teste como JUnit usam Template Method — setUp(), o teste em si e tearDown() seguem uma sequência fixa.
Processos de importação em ERP (validar → transformar → persistir → notificar) são Template Method clássico.
No Spring Batch, o ItemReader → ItemProcessor → ItemWriter segue esse esqueleto.
 */

// USO — a sequência é sempre a mesma, o conteúdo varia
public class Main {

    public static void main(String[] args) {

        System.out.println("=== Margherita ===");
        new PizzaMargherita().preparar();
        // Massa fina napolitana
        // Molho de tomate suave
        // Mussarela fresca e manjericão
        // Assando por 12 minutos a 280°C
        // Pizza pronta!

        System.out.println("=== Pepperoni ===");
        new PizzaPepperoni().preparar();
        // Massa grossa americana
        // Molho picante
        // Pepperoni e cheddar
        // Assando por 12 minutos a 280°C
        // Adicionando orégano por cima.
        // Pizza pronta!
    }
}
