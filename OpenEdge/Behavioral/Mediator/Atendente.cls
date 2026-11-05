/* SETORES CONCRETOS - nenhum conhece os outros */

CLASS Atendente INHERITS Setor :

    CONSTRUCTOR PUBLIC Atendente(INPUT mediator AS Mediator):
        SUPER(mediator).
    END CONSTRUCTOR.

    METHOD VOID registrarPedido(INPUT pedido AS CHARACTER):
        MESSAGE "[Atendente] Registrando pedido: " + pedido VIEW-AS ALERT-BOX.
        THIS-OBJECT:mediator:notificar(THIS-OBJECT, "pedido_registrado:" + pedido).
    END METHOD.

END CLASS.
