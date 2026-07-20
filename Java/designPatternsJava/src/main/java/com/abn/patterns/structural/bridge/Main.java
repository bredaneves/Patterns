package com.abn.patterns.structural.bridge;

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

/* BRIDGE — separar abstração de implementação
A pizzaria quer oferecer pizzas (Margherita, Pepperoni) em diferentes canais (balcão, delivery, app).
Sem Bridge: MargheritaBalcao, MargheritaDelivery, MargheritaApp, PepperoniBalcao... explode em classes.
O problema sem Bridge: cada nova pizza exige 3 classes novas (uma por canal).
Cada novo canal exige N classes novas (uma por pizza). Com 5 pizzas e 4 canais = 20 classes. Com Bridge = 5 + 4 = 9.

A "ponte" é o atributo canal dentro de Pizza.
Pizza e Canal evoluem independentemente — adicionar uma nova pizza ou um novo canal não afeta o outro lado.
 */

public class Main {

    public static void main(String[] args) {

        // USO — combinações livres em tempo de execução
        new Margherita(new Balcao()).preparar();   // [Balcão] Entregando: Margherita
        new Margherita(new Delivery()).preparar(); // [Delivery] Saindo para entrega: Margherita
        new Pepperoni(new App()).preparar();      // [App] Notificando cliente: Pepperoni
    }
}
