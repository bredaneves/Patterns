Passo 5: o desafio
Crie uma quarta pizza (QuatroQueijos) implementando só os dois métodos abstratos. Se você não alterou a base nem as outras subclasses, o padrão está funcionando.
Tente quebrar o esqueleto: sobrescreva o prepare() numa subclasse e inverta a ordem dos passos. O TypeScript não reclama, porque não existe final como no Java. Anote a diferença para o Java, onde final impede isso. Depois escreva uma defesa em tempo de execução no construtor da base: if (this.prepare !== PizzaRecipe.prototype.prepare) throw new Error('prepare() não pode ser sobrescrito');. Anote quando essa defesa vale a pena e quando é exagero.
Esqueça um método abstrato: crie uma subclasse sem addToppings e veja o erro de compilação. Depois transforme o addToppings num método comum, com corpo vazio. A pizza passa a compilar sem cobertura nenhuma. Anote o critério para escolher entre abstrato (obrigatório, o compilador cobra) e hook (opcional, pode ficar vazio).
Caia na armadilha do construtor: na base, chame this.addToppings() dentro do construtor, e na subclasse use um campo inicializado (private topping = 'bacon') dentro do addToppings. Você vai ver undefined, porque os campos da subclasse só são inicializados depois que o construtor da base termina. Anote por que chamar métodos sobrescrevíveis a partir do construtor é perigoso (o problema também existe no Java, e é o motivo de o prepare() ser um método à parte, chamado depois da construção).
Escreva a versão por composição, comum em TypeScript quando você quer evitar herança:

   interface RecipeSteps {
     addSauce(): void;
     addToppings(): void;
     bake?(): void;
     wantsCut?(): boolean;
   }

   function prepare(name: string, steps: RecipeSteps): void {
     console.log(`\n=== ${name} ===`);
     console.log('Sovando a massa');
     steps.addSauce();
     steps.addToppings();
     (steps.bake ?? (() => console.log('Assando por 25 minutos a 200°C')))();
     if (steps.wantsCut?.() ?? true) console.log('Cortando em fatias diagonais');
     console.log('Embalando na caixa');
   }

Compare as duas versões: a função não precisa de herança nem de classes, e as lacunas viram um objeto passado por fora. Anote quando a herança vale mais (passos compartilham estado protected, vários níveis de especialização) e quando a função basta.
6. Ligue com o que você já fez: o orderPizza do Factory Method que você escreveu no início era um Template Method: ele fixava a ordem (criar, preparar, assar, cortar, embalar) e deixava o createPizza para as subclasses. O Factory Method é uma especialização do Template Method, em que o passo variável é a criação de um objeto. Também o MyLoggerService extends ConsoleLogger, do curso do Dave Gray, sobrescrevia log e error e chamava super: eram hooks de uma classe base que já tinha o esqueleto de formatação.
7. Ligue com o NestJS e com o seu trabalho: os lifecycle hooks do Nest (onModuleInit, onApplicationShutdown) são a versão do padrão feita pelo framework: você implementa o gancho e o Nest decide quando chamá-lo (Hollywood puro). Rotinas batch de ERP costumam seguir o mesmo esqueleto (validar parâmetros, abrir o período, processar os registros, gerar o log e fechar), em que só o “processar” varia por rotina. Procure nas aplicações do trabalho uma classe base abstrata com um método que chama vários métodos protegidos, e anote quais passos são fixos, obrigatórios e hooks.
8. Escreva com suas palavras a diferença entre Template Method e Strategy, que resolvem problemas parecidos (variar partes de um algoritmo). Dica: o Template Method usa herança (a variação vem de uma subclasse, escolhida na hora da criação do objeto, e só muda passos de um algoritmo fixo), e o Strategy usa composição (a variação vem de um objeto passado por fora, trocável em tempo de execução, e substitui o algoritmo inteiro). Pense em qual dos dois deixa você trocar o comportamento de um objeto depois de criado. Me mande a sua resposta e eu comento.
