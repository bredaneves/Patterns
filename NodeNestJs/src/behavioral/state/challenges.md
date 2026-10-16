Passo 6: o desafio
Acrescente o estado “Em entrega” entre Pronto e Entregue. Você só deve criar uma classe e alterar o next do Ready. Se precisou mexer no Order ou nos outros estados, algo vazou. Compare com o que seria necessário numa versão com enum e switch em cada método.
Escreva a versão sem o padrão: um Order com status: 'received' | 'preparing' | ... e next()/cancel() cheios de switch. Acrescente um estado novo nas duas versões e anote em quantos pontos você mexeu em cada uma. Depois leve em conta que, com 8 estados e 5 operações, a versão com switch tem 40 ramos espalhados.
Reaproveite as instâncias: os estados não guardam nada (só um name fixo), então não precisam ser recriados a cada transição. Troque os new Preparing() por instâncias únicas por módulo e anote a ligação com o Flyweight que você acabou de fazer. Pense também no risco: se um estado passasse a guardar dados de um pedido, o compartilhamento quebraria.
Escreva a versão por tabela de transições, a mais comum em TypeScript quando os estados não têm comportamento próprio:

   type Status = 'received' | 'preparing' | 'baking' | 'ready' | 'delivered' | 'cancelled';
   type Action = 'next' | 'cancel';

   const transitions: Record<Status, Partial<Record<Action, Status>>> = {
     received: { next: 'preparing', cancel: 'cancelled' },
     preparing: { next: 'baking', cancel: 'cancelled' },
     baking: { next: 'ready' },
     ready: { next: 'delivered' },
     delivered: {},
     cancelled: {},
   };

Compare: a tabela é mais curta e serializa direto para o banco, mas não carrega comportamento por estado. Anote quando as classes valem mais (cada estado faz coisas diferentes, como cobrar, notificar, reservar estoque) e quando a tabela basta.
5. Ligue com o seu trabalho e com o banco: no schema.prisma do curso, o Role era um enum. Um status de pedido seria igual, e o banco guarda uma string, não um objeto. Escreva uma função stateFromStatus(status: string): OrderState que reconstrói o estado a partir do valor salvo, e anote onde ela moraria num service do Nest. Esse é o ponto prático em que o State encontra a persistência, e é comum em fluxos de aprovação e documentos de ERP (rascunho, aprovado, faturado, cancelado).
6. Responda a pergunta pendente do Strategy: qual a diferença entre Strategy e State, que têm a mesma estrutura? Agora que você fez os dois, use este exemplo: quem escolhe o próximo objeto de comportamento em cada um (o cliente, ou o próprio objeto)? Os objetos se conhecem entre si? Me mande a sua resposta e eu comento.