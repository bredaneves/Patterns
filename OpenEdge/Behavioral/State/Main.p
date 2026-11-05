
DEFINE VARIABLE pedido AS Pedido NO-UNDO.
ASSIGN pedido = NEW Pedido().

MESSAGE pedido:getEstado() VIEW-AS ALERT-BOX.  /* Recebido */

pedido:avancar().                        /* Pedido foi para a cozinha.*/
pedido:avancar().                        /* Pizza saiu para entrega.  */
pedido:cancelar().                       /* Nao e possi­vel cancelar pois ja saiu.*/
pedido:avancar().                        /* Pizza entregue!                         */
