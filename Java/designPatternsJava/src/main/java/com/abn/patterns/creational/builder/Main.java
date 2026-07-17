package com.abn.patterns.creational.builder;

/* Problema: A pizzaria agora aceita pedidos personalizados.
O cliente escolhe cada detalhe: tamanho, massa, molho, queijo,
ingredientes extras, borda recheada ou não.

Solução: criar um Diretor — uma classe que sabe como usar o Builder para
montar configurações específicas. O Builder continua o mesmo.
*/

public class Main {

    public static void main(String[] args) {

        System.out.println("Sem diretor");

        // === USO — leitura quase como linguagem natural ===
        Pizza p1 = new Pizza.Builder("grande", "fina")
                .molho("suave")
                .queijo("mussarela")
                .bordaRecheada()
                .build();
        p1.descrever();
        // Pizza grande, massa fina, molho suave, mussarela, borda recheada

        Pizza p2 = new Pizza.Builder("média", "grossa")
                .molho("picante")
                .ingredienteExtra("pepperoni")
                .build();
        p2.descrever();
        // Pizza média, massa grossa, molho picante, mussarela, extra: pepperoni


        // Uso com o Diretor
        System.out.println();
        System.out.println("Usando o diretor");
        PizzaioDiretor diretor = new PizzaioDiretor();
        Pizza italiana = diretor.montarItalianaClassica();
        Pizza americana = diretor.montarAmericanaEspecial();

    }
}
