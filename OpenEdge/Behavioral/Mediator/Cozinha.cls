/* SETORES CONCRETOS - nenhum conhece os outros */

CLASS Cozinha INHERITS Setor:

    CONSTRUCTOR PUBLIC Cozinha(INPUT mediator AS Mediator):
        SUPER(mediator).
    END CONSTRUCTOR.

    METHOD VOID prepararPedido(INPUT pedido AS CHARACTER):
        MESSAGE "[Cozinha] Preparando: " + pedido VIEW-AS ALERT-BOX.
        THIS-OBJECT:mediator:notificar(THIS-OBJECT, "pedido_pronto:" + pedido).
    END METHOD.

END CLASS.

