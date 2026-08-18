

/* USO - gerente nao precisa saber nada dos subsistemas */
DEFINE VARIABLE pizzaria AS PizzariaFacade.
ASSIGN pizzaria = new PizzariaFacade().
pizzaria:abrirPizzaria().

/* === Abrindo a pizzaria ===
 Forno aquecendo a 280°C
 Estoque verificado — OK
 Sistema de pedidos online
 Caixa aberto
 Entregadores notificados */

pizzaria:fecharPizzaria().
