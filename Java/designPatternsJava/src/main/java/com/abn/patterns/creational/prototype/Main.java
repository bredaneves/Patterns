package com.abn.patterns.creational.prototype;

/*Problema: você tem um objeto já configurado e quer criar variações dele sem
reconfigurar tudo do zero. Copiar o objeto manualmente é trabalhoso e acoplado
— você precisaria saber todos os atributos internos.*/

public class Main {

    public static void main(String[] args) {
        CardapioPizzas cardapio = new CardapioPizzas();

        // Registra os protótipos base uma vez só
        cardapio.registrar("calabresa",
                new PizzaPrototype("média", "fina", "clássico", "mussarela", "calabresa"));

        cardapio.registrar("frango",
                new PizzaPrototype("média", "fina", "branco", "mussarela", "frango"));

        // Pedido 1: calabresa normal
        System.out.println("Montando pizza 1");
        PizzaPrototype pedido1 = cardapio.obter("calabresa");
        pedido1.descrever(); // Pizza média, fina, clássico, mussarela, calabresa
        System.out.println();

        // Pedido 2: calabresa dupla (cópia + ajuste)
        System.out.println("Montando pizza 2");
        PizzaPrototype pedido2 = cardapio.obter("calabresa");
        pedido2.setTamanho("grande");
        pedido2.setIngrediente("calabresa dupla");
        pedido2.descrever(); // Pizza grande, fina, clássico, mussarela, calabresa dupla
        System.out.println();

        // O original não foi afetado
        System.out.println("Montando pizza 3");
        PizzaPrototype pedido3 = cardapio.obter("calabresa");
        pedido3.descrever(); // Pizza média, fina, clássico, mussarela, calabresa ← intacto
    }
}
