Passo 6: o desafio
Crie uma estratégia que precise dos itens, como “a pizza mais barata de graça quando o pedido tem duas ou mais pizzas”. O calculate(subtotal) não basta. Altere a interface para receber readonly CartItem[] e veja o compilador apontar as três estratégias existentes. Anote o que isso ensina: a escolha do que o contexto entrega à estratégia é a decisão de projeto mais delicada do padrão. Passar poucos dados limita as estratégias, e passar o contexto inteiro cria acoplamento.
Prove o benefício: escreva uma versão do Checkout sem o padrão, com switch (type) dentro do total(), e acrescente um quarto tipo de desconto nas duas versões. Conte em quantos arquivos você mexeu em cada uma, e anote qual princípio do SOLID (o “O”, Aberto/Fechado) isso demonstra.
Quebre a regra de propósito: tire o Math.min do FixedAmountDiscount e rode com um carrinho de um item de R$ 8,00 e desconto fixo de R$ 15,00. O total fica negativo. Anote onde essa proteção deveria morar: na estratégia, ou no Checkout, que não deveria confiar cegamente em quem foi plugado.
Escreva a versão funcional, que é a mais comum em TypeScript quando a estratégia não tem estado:

   type DiscountFn = (subtotalInCents: number) => number;

   const tenPercent: DiscountFn = (s) => Math.round(s * 0.1);
   const applyDiscount = (subtotal: number, fn: DiscountFn) => subtotal - fn(subtotal);

Compare as duas versões e anote quando a classe vale mais (estado, vários métodos, um label junto) e quando a função basta. É o mesmo raciocínio que você fez com o Decorator.
5. Ligue com o NestJS: o @nestjs/passport usa o nome do padrão literalmente: LocalStrategy, JwtStrategy e GoogleStrategy são formas intercambiáveis de autenticar, e o guard não precisa saber qual delas está ativa. Também dá para escolher uma estratégia pela configuração, com { provide: 'DISCOUNT', useFactory: (config) => ... }. Procure nas aplicações do trabalho algum ponto com if/switch por tipo (formato de exportação, forma de cálculo de imposto, tipo de notificação) que seria candidato a virar estratégias, e anote qual seria a interface.
6. Escreva com suas palavras a diferença entre Strategy e State, que têm a mesma estrutura (um contexto que delega a um objeto trocável). Dica: no Strategy, o cliente escolhe a estratégia e as estratégias não se conhecem. No State, o próprio objeto muda de estado conforme o fluxo e um estado costuma decidir o próximo. Me mande a sua resposta e eu comento.
