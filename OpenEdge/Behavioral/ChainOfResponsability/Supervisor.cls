/*  HANDLERS CONCRETOS */

CLASS Supervisor INHERITS AprovadorDesconto:

    METHOD OVERRIDE PUBLIC VOID aprovar(INPUT valor AS DECIMAL):
        IF valor <= 100 THEN DO:
            MESSAGE "[Supervisor] Desconto de R$" + STRING(valor) + " aprovado." VIEW-AS ALERT-BOX.
        END.
        ELSE IF proximo <> ? THEN DO:
            MESSAGE "[Supervisor] Fora do meu limite. Escalando..." VIEW-AS ALERT-BOX.
            proximo:aprovar(valor).
        END.
    END METHOD.

END CLASS.
