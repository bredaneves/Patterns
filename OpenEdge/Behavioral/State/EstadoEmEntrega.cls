/* ESTADOS CONCRETOS */

CLASS EstadoEmEntrega IMPLEMENTS EstadoPedido:
 
    METHOD VOID avancar(INPUT pedido AS Pedido):
        MESSAGE "Pizza entregue!" VIEW-AS ALERT-BOX.
        pedido:setEstado(NEW EstadoEntregue()).
    END METHOD.
 
    METHOD VOID cancelar(INPUT pedido AS Pedido):
        MESSAGE "Não é possível cancelar ? pedido já saiu para entrega." VIEW-AS ALERT-BOX.
    END METHOD.
 
    METHOD CHARACTER getDescricao():
        RETURN "Em entrega".
    END METHOD.
 
END CLASS.
