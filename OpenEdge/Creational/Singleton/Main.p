
/*Atendente 1 acessa o gerente*/
DEFINE VARIABLE g1 AS GerentePedidos.
ASSIGN g1 = GerentePedidos:getInstance().
g1:adicionarPedido("Pizza Calabresa").
g1:adicionarPedido("Pizza Frango").

/*Atendente 2 acessa - recebe O MESMO objeto*/
DEFINE VARIABLE g2 AS GerentePedidos.
ASSIGN g2 = GerentePedidos:getInstance().
g2:adicionarPedido("Pizza Margherita").

/*Pizzaiolo consulta - estado unificado*/
g1:mostrarFila(). /* Fila atual: [Pizza Calabresa, Pizza Frango, Pizza Margherita]*/
g2:mostrarFila(). /* Fila atual: [Pizza Calabresa, Pizza Frango, Pizza Margherita]*/

/*Confirmando que sao o mesmo objeto na memoria*/
DISPLAY g1 = g2. /*true*/
