Passo 5: o desafio
Acrescente uma operação sem tocar nos elementos. Crie um AllergenVisitor implements MenuVisitor<string[]>: a pizza devolve ['lactose'] se tiver Mussarela nos ingredientes, a sobremesa devolve ['nozes'] se containsNuts, e a bebida devolve []. Junte os alérgenos do pedido inteiro, sem repetição. Se você não alterou menu-elements.ts, o padrão está cumprindo a promessa: operação nova é uma classe nova.
Acrescente um elemento e veja o preço. Crie um Combo que guarda uma lista de MenuElement (o Composite de novo). O accept dele chama visitor.visitCombo(this). Adicione visitCombo à interface e veja o compilador apontar todos os visitors. No TotalPriceVisitor, implemente somando os filhos com child.accept(this). Anote o que isso mostra: no Visitor, operação nova é fácil e tipo novo é caro (mexe em todos os visitors). Numa hierarquia com métodos polimórficos nas próprias classes é o contrário. É o chamado expression problem, e saber de que lado do problema o seu código está é o critério para escolher o padrão.
Escreva um visitor com estado. Crie um SummaryVisitor implements MenuVisitor<void> que acumula contagens (pizzas, drinks, desserts) e o total em centavos, com um método report(): string. Percorra o pedido com ele e depois imprima o relatório. Anote o cuidado: um visitor com estado só serve para uma travessia, e reutilizá-lo acumula valores da anterior. Compare com o reset() dos builders, e com a escolha de criar um novo a cada uso.
Compare com a união discriminada, a forma mais comum em TypeScript quando os dados são simples:

   type Item =
     | { kind: 'pizza'; name: string; size: Size; toppings: string[]; basePriceInCents: number }
     | { kind: 'drink'; name: string; volumeMl: number; priceInCents: number }
     | { kind: 'dessert'; name: string; priceInCents: number; containsNuts: boolean };

   const priceOf = (item: Item): number => {
     switch (item.kind) {
       case 'pizza':
         return Math.round((item.basePriceInCents * SIZE_PERCENT[item.size]) / 100) + item.toppings.length * 300;
       case 'drink':
       case 'dessert':
         return item.priceInCents;
       default: {
         const unreachable: never = item;
         return unreachable;
       }
     }
   };

Veja que não existe accept nem classes, e que o never do default faz o compilador apontar todo switch que ficou sem tratar um tipo novo (o mesmo recurso que você usou no Mediator). Esse formato também serve para dados que vêm de JSON ou do Prisma, que não são instâncias de classe. Anote quando o Visitor com classes vale mais (elementos com comportamento próprio e hierarquia, estruturas percorridas por vários tipos de operação) e quando a união com switch basta.
5. Quebre o double dispatch de propósito. Troque o accept da Drink para return visitor.visitPizza(this as any) e rode. O código compila (por causa do any) e o comportamento fica errado em silêncio, com o preço da bebida calculado como se fosse pizza. Anote por que o accept precisa chamar o método do próprio tipo, e por que um erro de copiar e colar nessas linhas é o defeito mais comum do padrão.
6. Decida quem percorre. No Composite do desafio 2, o Combo.accept pode (a) só chamar visitor.visitCombo(this) e deixar o visitor descer pelos filhos, ou (b) percorrer os filhos e chamar o visitor para cada um. Escreva as duas e anote o que muda: na (a) o visitor controla a ordem e pode pular ramos, e na (b) a estrutura controla e o visitor só reage. Relacione com o Iterator, que separa o percurso do que se faz em cada nó.
7. Ligue com o seu trabalho: o padrão aparece sempre que se processa uma árvore de tipos variados. O compilador do TypeScript (ts.forEachChild), as regras do ESLint (cada regra devolve um objeto com um método por tipo de nó, como CallExpression(node) { ... }) e os plugins do Babel (visitor: { Identifier(path) { ... } }) são visitors sobre a árvore sintática. Documentos fiscais e cadastros de ERP têm a mesma forma (um XML de NF-e é uma árvore de elementos de tipos diferentes): validar, totalizar e exportar são operações que se pareceriam com visitors. Procure nas aplicações do trabalho um switch ou uma cadeia de instanceof sobre o tipo de um objeto repetida em vários arquivos, e anote quais seriam os elementos e quais as operações.
8. Escreva com suas palavras a diferença entre colocar a operação num Visitor e colocá-la como método em cada classe (polimorfismo comum), e em que situação cada um é melhor. Dica: pense em qual dos dois eixos muda mais no seu sistema, a lista de tipos ou a lista de operações, e em quem precisa conhecer os detalhes internos de quem (os visitors acessam campos públicos dos elementos, o que quebra um pouco o encapsulamento). Me mande a sua resposta e eu comento.
