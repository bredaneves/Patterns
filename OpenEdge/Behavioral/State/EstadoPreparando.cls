/* ESTADOS CONCRETOS */

CLASS EstadoPreparando IMPLEMENTS EstadoPedido:
 
    METHOD VOID avancar(INPUT pedido AS Pedido):
        MESSAGE "Pizza saiu para entrega." VIEW-AS ALERT-BOX.
        pedido:setEstado(NEW EstadoEmEntrega()).
    END METHOD.
 
    METHOD VOID cancelar(INPUT pedido AS Pedido):
        MESSAGE "Cancelado durante preparo ? cobrança parcial." VIEW-AS ALERT-BOX.
        pedido:setEstado(NEW EstadoCancelado()).
    END METHOD.
 
    METHOD CHARACTER getDescricao():
        RETURN "Preparando".
    END METHOD.
 
END CLASS.
