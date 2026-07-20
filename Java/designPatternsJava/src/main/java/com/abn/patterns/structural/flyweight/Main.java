package com.abn.patterns.structural.flyweight;

/* GERAL

Os quatro restantes — cada um resolve um problema distinto

Bridge — o problema é explosão de subclasses.
Você tem duas dimensões que variam independentemente (ex: tipo de pizza + canal de entrega).
Sem Bridge, cada combinação vira uma classe separada.

Composite — o problema é hierarquia parte/todo.
Você quer tratar um item individual e um grupo de itens da mesma forma (ex: ingrediente único vs combo de ingredientes).

Decorator — o problema é adicionar comportamento sem herança.
Você quer enriquecer um objeto com funcionalidades extras em tempo de execução, empilhando camadas.

Flyweight — o problema é memória com muitos objetos similares.
Você cria milhares de objetos que compartilham a maior parte do estado — Flyweight separa o que é compartilhável do que é único.
 */

/* FLYWEIGHT — compartilhar estado para economizar memória
A pizzaria tem um sistema de rastreamento de entrega. Para cada pizza entregue, cria um objeto com: tipo da pizza,
endereço de entrega e coordenadas GPS. Com 10.000 entregas por dia, o tipo da pizza se repete milhares de vezes.
O problema: criar 10.000 objetos onde boa parte do estado é idêntica desperdiça memória. "Margherita" como string,
seus ingredientes, sua descrição — são iguais em todos os pedidos de Margherita.

Solução: separar o estado intrínseco (compartilhável: tipo, ingredientes) do estado extrínseco (único por instância: endereço, GPS).
O intrínseco fica num objeto compartilhado — o Flyweight.

Estado intrínseco (Flyweight)
Compartilhado entre todas as instâncias do mesmo tipo. Não muda. Ex: nome da pizza, ingredientes, preço base.

Estado extrínseco (contexto)
Único por instância. Passado na chamada. Ex: endereço de entrega, horário do pedido, coordenadas GPS.


Onde você já viu isso: o pool de strings do Java (String.intern()) é Flyweight.
Sistemas de jogos usam para representar milhares de árvores ou partículas com o mesmo modelo 3D compartilhado.
Em ERP, metadados de campos de formulário são candidatos — o mesmo campo "CNPJ" existe em milhares de telas mas a definição é uma só.
 */

import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        // USO — 5 entregas, só 2 TipoPizza criados na memória
        List<Entrega> entregas = new ArrayList<>();

        entregas.add(new Entrega(
                TipoPizzaFactory.obter("Margherita", "mussarela, manjericão", 40.0),
                "Rua A, 100", "-23.5, -46.6"));

        entregas.add(new Entrega(
                TipoPizzaFactory.obter("Pepperoni", "pepperoni, mussarela", 52.0),
                "Rua B, 200", "-23.6, -46.7"));

        entregas.add(new Entrega(
                TipoPizzaFactory.obter("Margherita", "mussarela, manjericão", 40.0),
                "Rua C, 300", "-23.4, -46.5")); // ← reutiliza Margherita

        entregas.forEach(Entrega::rastrear);

        System.out.println("TipoPizza criados: " + TipoPizzaFactory.totalCriados());
        // [Factory] Criando TipoPizza: Margherita
        // [Factory] Criando TipoPizza: Pepperoni
        // TipoPizza criados: 2  ← 3 entregas, apenas 2 objetos de tipo na memória
    }
}
