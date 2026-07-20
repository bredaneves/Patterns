package com.abn.patterns.structural.decorator;

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

/* DECORATOR — adicionar comportamento em camadas
A pizzaria quer adicionar extras à pizza: borda recheada, queijo extra, molho especial. Cada extra adiciona preço e descrição.
Qualquer combinação deve ser possível sem explodir em subclasses.
Sem Decorator: PizzaComBorda, PizzaComQueijo, PizzaComBordaEQueijo, PizzaComMolho, PizzaComTudo...
cada combinação vira uma classe. Com 4 extras = 16 combinações possíveis.

Com Decorator: você empilha camadas em tempo de execução. Cada camada adiciona seu comportamento e delega o resto para a camada de baixo.

Onde você já viu isso: BufferedReader(new FileReader(...)) em Java é um Decorator clássico.
No Spring, filtros de servlet são Decorators — cada filtro adiciona algo (autenticação, log, compressão) e
repassa a requisição para o próximo.
*/

// USO — empilha camadas livremente
public class Main {

    public static void main(String[] args) {

        Pizza p = new PizzaMargherita();
        System.out.println(p.getDescricao() + " R$" + p.getPreco());
        // Margherita R$40.0

        p = new BordaRecheada(p);
        p = new QueijoDuplo(p);
        p = new MolhoEspecial(p);
        System.out.println(p.getDescricao() + " R$" + p.getPreco());
        // Margherita, borda recheada, queijo duplo, molho especial R$59.0

        // Outra combinação — sem nenhuma classe nova
        Pizza p2 = new QueijoDuplo(new QueijoDuplo(new PizzaMargherita()));
        System.out.println(p2.getDescricao() + " R$" + p2.getPreco());
        // Margherita, queijo duplo, queijo duplo R$52.0  ← pode empilhar o mesmo!

    }
}
