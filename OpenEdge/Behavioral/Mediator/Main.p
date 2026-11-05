
DEFINE VARIABLE gerente AS GerentePizzaria NO-UNDO.
ASSIGN gerente = new GerentePizzaria().

gerente:atendente  = new Atendente(gerente).
gerente:cozinha    = new Cozinha(gerente).
gerente:entregador = new Entregador(gerente).
gerente:caixa      = new Caixa(gerente).

gerente:atendente:registrarPedido("Pizza Calabresa").

/* [Atendente] Registrando pedido: Pizza Calabresa
   [Cozinha] Preparando: Pizza Calabresa
   [Entregador] Saindo com: Pizza Calabresa
   [Caixa] Cobrança efetuada: Pizza Calabresa*/
