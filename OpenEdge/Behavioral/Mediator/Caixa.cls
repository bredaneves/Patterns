
/* SETORES CONCRETOS - nenhum conhece os outros */
CLASS Caixa INHERITS Setor:

    CONSTRUCTOR PUBLIC Caixa(INPUT mediator AS Mediator):
        SUPER(mediator).
    END CONSTRUCTOR.

    METHOD VOID cobrar(INPUT pedido AS CHARACTER):
        MESSAGE "[Caixa] Cobrança efetuada: " + pedido VIEW-AS ALERT-BOX.
    END METHOD.

END CLASS.
