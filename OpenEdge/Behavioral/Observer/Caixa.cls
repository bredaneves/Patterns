/* OBSERVERS CONCRETOS */

CLASS Caixa IMPLEMENTS Observer:

    METHOD PUBLIC VOID atualizar(INPUT pedido AS CHARACTER):
        MESSAGE "[Caixa] Liberando cobrança: " + pedido.
    END METHOD.

END CLASS.
