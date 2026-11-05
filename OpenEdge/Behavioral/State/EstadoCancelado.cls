/* ESTADOS CONCRETOS */

CLASS EstadoCancelado IMPLEMENTS EstadoPedido:

    METHOD PUBLIC VOID avancar(INPUT pedido AS Pedido):
        MESSAGE "Pedido cancelado - não pode avançar." VIEW-AS ALERT-BOX.
    END METHOD.

    METHOD PUBLIC VOID cancelar(INPUT pedido AS Pedido):
        MESSAGE "Já cancelado." VIEW-AS ALERT-BOX.
    END METHOD.

    METHOD PUBLIC CHARACTER getDescricao():
        RETURN "Cancelado".
    END METHOD.

END CLASS.
