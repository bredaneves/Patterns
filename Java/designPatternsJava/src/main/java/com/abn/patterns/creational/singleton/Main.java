package com.abn.patterns.creational.singleton;

/*O problema que o Singleton resolve
Alguns recursos do sistema precisam existir em uma única instância.
Criar mais de uma causa inconsistências, desperdício ou comportamento imprevisível.

Exemplos reais:
— Pool de conexões com o banco: se cada classe criar o seu próprio, você abre centenas de conexões desnecessárias.
— Logger: se cada módulo criar um logger diferente, os logs vão para lugares diferentes e perdem a ordem cronológica.
— Configuração da aplicação: se cada parte ler e guardar as configs separadamente, uma pode ter valor diferente da outra.
— Fila de pedidos de uma pizzaria: se existirem duas filas paralelas, os atendentes não sabem qual seguir.

O Singleton garante: apenas uma instância da classe existe em toda a aplicação, e qualquer parte do código que precisar dela vai receber sempre a mesma.
1. Impedir que new seja chamado diretamente
2. Oferecer um ponto de acesso global à instância única

Cenário sem controle:

Atendente 1 abre sua própria fila de pedidos.
Atendente 2 abre outra fila separada.
Pizzaiolo não sabe qual fila seguir.
Pedido 5 da fila 1 conflita com pedido 5 da fila 2.
Resultado: caos, pedidos perdidos, cliente insatisfeito.
Com Singleton: existe um único Gerente de Pedidos. Qualquer atendente que precisar registrar um pedido acessa sempre o mesmo gerente — e ele mantém a fila consistente para toda a pizzaria.

O problema de corrida (race condition):
Thread A verifica: instancia == null → verdadeiro → vai criar
Thread B verifica: instancia == null → verdadeiro → vai criar também
Resultado: dois objetos criados. O Singleton quebrou. Ver alternativas comentadas na classe GerentePedidos.
*/

public class Main {

    public static void main(String[] args) {

        // Atendente 1 acessa o gerente
        GerentePedidos g1 = GerentePedidos.getInstance();
        g1.adicionarPedido("Pizza Calabresa");
        g1.adicionarPedido("Pizza Frango");

        // Atendente 2 acessa — recebe O MESMO objeto
        GerentePedidos g2 = GerentePedidos.getInstance();
        g2.adicionarPedido("Pizza Margherita");

        // Pizzaiolo consulta — estado unificado
        g1.mostrarFila(); // Fila atual: [Pizza Calabresa, Pizza Frango, Pizza Margherita]
        g2.mostrarFila(); // Fila atual: [Pizza Calabresa, Pizza Frango, Pizza Margherita]

        // Confirmando que são o mesmo objeto na memória
        System.out.println(g1 == g2); // true
    }
}
