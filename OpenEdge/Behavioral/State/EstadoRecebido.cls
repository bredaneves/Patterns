/* ESTADOS CONCRETOS */

CLASS EstadoRecebido IMPLEMENTS EstadoPedido:
 
    METHOD VOID avancar(INPUT pedido AS Pedido):
        MESSAGE "Pedido foi para a cozinha." VIEW-AS ALERT-BOX.
        pedido:setEstado(NEW EstadoPreparando()).
    END METHOD.
 
    METHOD VOID cancelar(INPUT pedido AS Pedido):
        MESSAGE "Pedido cancelado antes de iniciar." VIEW-AS ALERT-BOX.
        pedido:setEstado(NEW EstadoCancelado()).
    END METHOD.
 
    METHOD CHARACTER getDescricao():
        RETURN "Recebido".
    END METHOD.
 
END CLASS.
