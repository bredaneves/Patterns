Crie uma terceira receita no Director (makeVeggie) e confirme que não precisou alterar nenhum dos dois builders.
Crie um terceiro builder, por exemplo um PriceBuilder que devolve um number com o preço total (tamanho, borda e cada ingrediente somam valores). Se o Director continuar intacto, o padrão está funcionando.
Implemente a variação fluente (a mais comum no dia a dia, do tipo Effective Java ou Lombok @Builder), sem Director. Cada método devolve this, para encadear:

   const pizza = new FluentPizzaBuilder()
     .size('large')
     .topping('Pepperoni')
     .topping('Mushroom')
     .build();

Faça o build() lançar um erro se uma regra for violada (por exemplo, pizza sem massa definida).
4. Compare com TypeScript idiomático. Em TS, muitas vezes um objeto com campos opcionais resolve sem Builder:

   createPizza({ size: 'large', toppings: ['Pepperoni'] })

Escreva com suas palavras quando o Builder ainda vale a pena (construção em etapas, validação ao final, várias representações do mesmo processo) e quando o objeto literal basta.
5. Compare com o Abstract Factory que você acabou de fazer: ele devolve famílias de objetos prontos de uma vez, e o Builder constrói um objeto complexo em etapas. Me mande a sua explicação e eu comento.
