/* SETORES CONCRETOS - nenhum conhece os outros */

CLASS Entregador INHERITS Setor:

    CONSTRUCTOR PUBLIC Entregador(INPUT mediator AS Mediator):
        SUPER(mediator).
    END CONSTRUCTOR.

    METHOD VOID entregar(INPUT pedido AS CHARACTER):
        MESSAGE "[Entregador] Saindo com: " + pedido VIEW-AS ALERT-BOX.
        THIS-OBJECT:mediator:notificar(THIS-OBJECT, "pedido_entregue:" + pedido).
    END METHOD.

END CLASS.
