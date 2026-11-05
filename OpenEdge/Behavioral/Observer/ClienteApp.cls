/* OBSERVERS CONCRETOS */

CLASS ClienteApp IMPLEMENTS Observer:

    METHOD PUBLIC VOID atualizar(INPUT pedido AS CHARACTER):
        MESSAGE "[App] Notificando cliente: " + pedido.
    END METHOD.

END CLASS.
