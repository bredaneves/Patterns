/* HANDLERS CONCRETOS */

CLASS Gerente INHERITS AprovadorDesconto:

    METHOD OVERRIDE PUBLIC VOID aprovar(INPUT valor AS DECIMAL):
        MESSAGE "[Gerente] Desconto de R$" + STRING(valor) + " aprovado pelo gerente." VIEW-AS ALERT-BOX.
    END METHOD.

END CLASS.
