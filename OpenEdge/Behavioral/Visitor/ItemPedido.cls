/* INTERFACE ELEMENTO - aceita qualquer visitor */

INTERFACE ItemPedido:

    METHOD VOID aceitar(INPUT visitor AS Visitor).
    METHOD CHARACTER getNome().
    METHOD DECIMAL getPreco().
END INTERFACE.
