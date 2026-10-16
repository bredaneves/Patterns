Passo 6: o desafio
Adicione um decorador (Bacon ou Catupiry) e use-o em qualquer combinação. Se você não alterou nenhum arquivo existente além de acrescentar uma classe, o padrão está funcionando.
Decore comportamento, não só preço: crie um LoggingPizza que implementa Pizza, embrulha outra e imprime uma linha toda vez que getCost() é chamado (usando console.log). Empilhe-o em volta de uma pizza já decorada. Anote o que isso diz sobre decoradores serem usados para preocupações transversais, como log e métricas, além de acrescentar dados.
Teste a ordem: crie um Desconto10Percent que devolve super.getCost() * 0.9 (arredondado). Compare new Desconto10Percent(new Pepperoni(new PlainPizza())) com new Pepperoni(new Desconto10Percent(new PlainPizza())). Os preços são diferentes. Anote por que a ordem de empilhar importa quando os decoradores não são só somas.
Quebre o instanceof: faça console.log(new Pepperoni(new PlainPizza()) instanceof PlainPizza). Dá false, porque o objeto de fora é um Pepperoni. Anote por que o código que depende do tipo concreto da pizza quebra quando há decoradores, e por que o cliente deve depender só da interface.
Escreva a versão funcional, que é o jeito mais comum em TypeScript quando não há estado:

   const withTopping = (name: string, extra: number) => (pizza: Pizza): Pizza => ({
     getDescription: () => `${pizza.getDescription()}, ${name}`,
     getCost: () => pizza.getCost() + extra,
   });

   const pepperoni = withTopping('pepperoni', 800);
   show(pepperoni(new PlainPizza()));

Compare as duas versões e anote quando a classe vale mais (comportamento complexo, estado próprio) e quando a função basta.
6. Ligue com o NestJS: os interceptors do Nest são o exemplo mais próximo do padrão: eles embrulham a chamada do método do controller, executam algo antes e depois, e devolvem o resultado. Procure se as aplicações do trabalho usam algum (log, cache, transformação de resposta) e anote qual preocupação transversal ele acrescenta.
7. Escreva com suas palavras a diferença entre Decorator, Proxy e Adapter, que a gente já deixou em aberto nos padrões anteriores. Dica: os três ficam na frente de outro objeto. O Adapter muda a interface, o Proxy controla o acesso ao objeto, e o Decorator acrescenta comportamento mantendo a interface. Me mande a sua resposta e eu comento.
