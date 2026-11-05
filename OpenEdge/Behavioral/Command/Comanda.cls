
/* RECEIVER - quem realmente sabe fazer a operaca */
CLASS Comanda:

    DEFINE PRIVATE TEMP-TABLE tt_itens NO-UNDO
        FIELD seq       AS INTEGER
        FIELD descricao AS CHARACTER CASE-SENSITIVE
        INDEX idx_seq IS PRIMARY UNIQUE seq.

    DEFINE PRIVATE VARIABLE contador AS INTEGER NO-UNDO.

    METHOD PUBLIC VOID adicionarItem(INPUT pItem AS CHARACTER):
        contador = contador + 1.

        CREATE tt_itens.
        ASSIGN
            tt_itens.seq       = contador
            tt_itens.descricao = pItem.

        MESSAGE "[Comanda] Adicionado: " + pItem VIEW-AS ALERT-BOX.
    END METHOD.

    METHOD PUBLIC VOID removerItem(INPUT pItem AS CHARACTER):
        /* como o Java: remove so a primeira ocorrencia */
        FIND FIRST tt_itens WHERE tt_itens.descricao = pItem NO-ERROR.

        IF AVAILABLE tt_itens THEN
            DELETE tt_itens.

        MESSAGE "[Comanda] Removido: " + pItem VIEW-AS ALERT-BOX.
    END METHOD.

    METHOD PUBLIC VOID mostrar():
        DEFINE VARIABLE lista AS CHARACTER NO-UNDO.

        FOR EACH tt_itens BY tt_itens.seq:
            lista = lista + (IF lista = "" THEN "" ELSE ", ") + tt_itens.descricao.
        END.

        MESSAGE "Comanda atual: [" + lista + "]" VIEW-AS ALERT-BOX.
    END METHOD.

END CLASS.