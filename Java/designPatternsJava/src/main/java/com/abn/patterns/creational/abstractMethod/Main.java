package com.abn.patterns.creational.abstractMethod;

/*Problema novo: não é mais um produto — são três produtos relacionados.
A fábrica precisa garantir que todos sejam do mesmo estilo. */

public class Main {

    public static void main(String[] args) {

        MontadorPizza m1 = new MontadorPizza(new FabricaItaliana());
        m1.montar();
        // Massa fina / Molho suave / Mussarela fresca

        MontadorPizza m2 = new MontadorPizza(new FabricaAmericana());
        m2.montar();
        // Massa grossa / Molho picante / Pepperoni

        MontadorPizza m3 = new MontadorPizza(new FabricaVegetariana());
        m3.montar();
        // Massa integral / Molho de ervas / Legumes tostados
    }
}
