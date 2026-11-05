
DEFINE VARIABLE cozinha AS Cozinha .
ASSIGN cozinha = new Cozinha().

cozinha:inscrever(new Entregador()).
cozinha:inscrever(new Caixa()).
cozinha:inscrever(new ClienteApp()).

cozinha:pedidoPronto("Pizza Margherita").

        
/* [Cozinha] Pedido pronto: Pizza Margherita
    [Entregador] Buscando: Pizza Margherita
    [Caixa] Liberando cobrança: Pizza Margherita
    [App] Notificando cliente: Pizza Margherita */
    