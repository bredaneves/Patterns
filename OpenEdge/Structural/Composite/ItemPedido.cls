/* INTERFACE COMUM — item simples e grupo implementam a mesma */

INTERFACE ItemPedido:
    METHOD PUBLIC DECIMAL getPreco().
    METHOD PUBLIC VOID descrever(INPUT indent AS CHARACTER).
END INTERFACE.
