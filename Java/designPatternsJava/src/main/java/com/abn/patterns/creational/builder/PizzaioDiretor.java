package com.abn.patterns.creational.builder;

public class PizzaioDiretor {

    public Pizza montarItalianaClassica() {
        System.out.println("Montando pizza italiana clássica");
        return new Pizza.Builder("grande", "fina")
                .molho("suave")
                .queijo("mussarela fresca")
                .build();
    }

    public Pizza montarAmericanaEspecial() {
        System.out.println("Montando pizza americana especial");
        return new Pizza.Builder("família", "grossa")
                .molho("picante")
                .queijo("cheddar")
                .bordaRecheada()
                .ingredienteExtra("bacon")
                .build();
    }
}
