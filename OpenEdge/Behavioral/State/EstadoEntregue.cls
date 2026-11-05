/* ESTADOS CONCRETOS */

CLASS EstadoEntregue IMPLEMENTS EstadoPedido:
 
    METHOD VOID avancar(INPUT pedido AS Pedido):
        MESSAGE "Pedido já finalizado." VIEW-AS ALERT-BOX.
    END METHOD.
 
    METHOD VOID cancelar(INPUT pedido AS Pedido):
        MESSAGE "Não é possível cancelar ? já entregue." VIEW-AS ALERT-BOX.
    END METHOD.
 
    METHOD CHARACTER getDescricao():
        RETURN "Entregue".
    END METHOD.
 
END CLASS.
