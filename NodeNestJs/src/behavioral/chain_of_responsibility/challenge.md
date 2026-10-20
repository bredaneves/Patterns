Passo 5: o desafio
Adicione um elo (RegionalDirector, até 50%) depois do dono. Crie a classe e ligue-a com setNext. Se você não alterou Approver nem os outros elos, o padrão está funcionando.
Inverta a ordem: monte a cadeia Owner -> Manager -> Attendant e repita os pedidos. O dono aprova tudo até 30% e os outros nunca são consultados. Anote o que isso diz sobre a ordem da cadeia ser uma regra de negócio, e não um detalhe de implementação.
Provoque um ciclo: faça owner.setNext(attendant) e envie um pedido de 50%. Você vai ver o estouro de pilha (Maximum call stack size exceeded), o mesmo problema do ciclo que você provocou no Composite. Anote onde colocaria a defesa (no setNext, percorrendo a cadeia à procura do próprio elo).
Escreva a versão pipeline, que é a forma mais comum no dia a dia (Express, Nest, Koa). Aqui todos os elos agem e cada um decide se chama o próximo:

   type Handler<T> = (request: T, next: () => void) => void;

   const run = <T>(handlers: Handler<T>[], request: T): void => {
     const dispatch = (i: number): void => {
       const handler = handlers[i];
       if (!handler) return;
       handler(request, () => dispatch(i + 1));
     };
     dispatch(0);
   };

Escreva três handlers para um pedido (logRequest, checkAuthenticated e validateItems) em que o segundo interrompe a cadeia quando o usuário não está autenticado, simplesmente não chamando next(). Anote a diferença para a versão clássica: lá um elo resolve, aqui vários participam e qualquer um pode barrar.
5. Torne a cadeia assíncrona: suponha que a aprovação do gerente consulte um serviço externo. Mude handle para Promise<Decision> e canApprove para Promise<boolean>, com await onde for preciso. Anote o que muda na assinatura de toda a cadeia, e por que a função assíncrona contamina quem chama (o mesmo raciocínio de async/await que você estudou no início).
6. Ligue com o NestJS e com o seu trabalho: o ciclo de vida de uma requisição no Nest é uma cadeia (middleware, guards, interceptors, pipes, controller, exception filters), e o middleware do Express é literalmente o next() da versão pipeline. Os guards se diferenciam num ponto: todos precisam liberar, o que é mais um “E” do que um “quem resolver primeiro”. Alçadas de aprovação também são comuns em ERP (pedidos de compra, liberação de crédito, aprovação de descontos): identifique um fluxo assim nas aplicações do trabalho e anote quais seriam os elos e o critério de cada um.
7. Escreva com suas palavras a diferença entre Chain of Responsibility e Decorator, que também encadeiam objetos de mesma interface, cada um guardando uma referência ao próximo. Dica: pense em quantos elos participam da resposta (todos ou só um), se a solicitação pode terminar sem ser atendida, e se o objetivo é acrescentar comportamento ou encontrar quem trate o pedido. Me mande a sua resposta e eu comento.
