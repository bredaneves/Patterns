/* INTERFACE DE ESTADO */

INTERFACE EstadoPedido:

    METHOD VOID avancar(INPUT pedido AS Pedido).
    METHOD VOID cancelar(INPUT pedido AS Pedido).
    METHOD CHARACTER getDescricao().
END INTERFACE.
