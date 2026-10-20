Passo 7: o desafio
Crie um RemoveLastCommand. O execute() remove o último item e precisa guardá-lo, porque o undo() tem que colocá-lo de volta. Teste com o terminal: adicione, remova e desfaça. Anote por que o estado a restaurar só é conhecido na hora de executar, e não na construção do comando.
Quebre a regra da ordem: guarde duas referências (const a = new AddItemCommand(...), const b = ...), execute as duas e chame a.undo() direto, sem passar pelo terminal. O removeLast() vai tirar o item de b, não o de a. Anote por que o undo por removeLast depende da disciplina LIFO do invoker, e como você tornaria o comando independente dela (por exemplo, o comando guardar a posição ou um id do item que adicionou).
Prove o esvaziamento do refazer: desfaça um comando, execute outro novo e chame redo(). Deve imprimir Nada para refazer. Comente a linha this.redoStack = [] no run(), repita e anote o que passa a ser possível (e por que isso confunde o usuário).
Escreva a versão funcional, comum em TypeScript quando o comando é simples:

   interface FnCommand { description: string; execute: () => void; undo: () => void; }

   const addItem = (cart: Cart, item: CartItem): FnCommand => ({
     description: `Adicionar ${item.name}`,
     execute: () => cart.add(item),
     undo: () => { cart.removeLast(); },
   });

Compare com a classe e anote quando ela vale mais (estado interno, como o backup) e quando o objeto literal basta.
5. Transforme comandos em dados: troque a description por um objeto serializável ({ type: 'add', item }) e escreva uma função que reconstrói o comando a partir dele. Com isso o histórico pode ser salvo em arquivo ou banco e reexecutado. Anote a ligação com event sourcing e com filas de jobs.
6. Ligue com o NestJS e com o seu trabalho: o módulo @nestjs/cqrs usa o nome do padrão literalmente (CommandBus, ICommand e CommandHandler), em que o controller só cria um comando e despacha, sem saber quem o executa. Rotinas de RPA e integrações, que você conhece bem, são parecidas: uma lista de passos, cada um com execute e uma compensação em caso de falha (o undo). Identifique nas aplicações do trabalho um fluxo que seria uma lista de comandos com reversão.
7. Escreva com suas palavras a diferença entre Command e Strategy, que também encapsulam comportamento em objetos. Dica: observe o que cada objeto representa (uma solicitação com destinatário e parâmetros, que pode ser guardada, enfileirada e desfeita, ou um algoritmo intercambiável) e quem o executa depois. Me mande a sua resposta e eu comento.
