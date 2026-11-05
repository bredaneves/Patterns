/* OBSERVERS CONCRETOS */
CLASS Entregador IMPLEMENTS Observer:

    METHOD PUBLIC VOID atualizar(INPUT pedido AS CHARACTER):
        MESSAGE "[Entregador] Buscando: " + pedido.
    END METHOD.

END CLASS.
