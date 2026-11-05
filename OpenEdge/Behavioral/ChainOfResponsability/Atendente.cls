/* HANDLERS CONCRETOS */
CLASS Atendente INHERITS AprovadorDesconto:

    METHOD OVERRIDE PUBLIC VOID aprovar(INPUT valor AS DECIMAL):
        IF valor <= 50 THEN DO:
            MESSAGE "[Atendente] Desconto de R$" + STRING(valor) + " aprovado." VIEW-AS ALERT-BOX.
        END.
        ELSE IF proximo <> ? THEN DO:
            MESSAGE "[Atendente] Fora do meu limite. Escalando..." VIEW-AS ALERT-BOX.
            proximo:aprovar(valor).
        END.
    END METHOD.

END CLASS.
