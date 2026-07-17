package com.abn.patterns.creational.builder;

// === PRODUTO ===
public class Pizza {

    private final String tamanho;
    private final String massa;
    private final String molho;
    private final String queijo;
    private final boolean bordaRecheada;
    private final String ingredienteExtra;

    // Construtor privado — só o Builder pode criar
    private Pizza(Builder builder) {
        this.tamanho         = builder.tamanho;
        this.massa           = builder.massa;
        this.molho           = builder.molho;
        this.queijo          = builder.queijo;
        this.bordaRecheada   = builder.bordaRecheada;
        this.ingredienteExtra = builder.ingredienteExtra;
    }

    public void descrever() {
        System.out.println("Pizza " + tamanho + ", massa " + massa
                + ", molho " + molho + ", queijo " + queijo
                + (bordaRecheada ? ", borda recheada" : "")
                + (ingredienteExtra != null ? ", extra: " + ingredienteExtra : ""));
    }

    // === BUILDER (classe interna) ===
    static class Builder {
        // Obrigatórios
        private final String tamanho;
        private final String massa;

        // Opcionais com padrão
        private String molho           = "clássico";
        private String queijo          = "mussarela";
        private boolean bordaRecheada  = false;
        private String ingredienteExtra = null;

        // Obrigatórios entram no construtor do Builder
        public Builder(String tamanho, String massa) {
            this.tamanho = tamanho;
            this.massa   = massa;
        }

        // Cada método retorna o próprio Builder → encadeamento fluente
        public Builder molho(String molho) {
            this.molho = molho; return this;
        }

        public Builder queijo(String queijo) {
            this.queijo = queijo; return this;
        }

        public Builder bordaRecheada() {
            this.bordaRecheada = true; return this;
        }

        public Builder ingredienteExtra(String ingrediente) {
            this.ingredienteExtra = ingrediente; return this;
        }

        // Entrega o objeto final
        public Pizza build() {
            return new Pizza(this);
        }
    }
}
