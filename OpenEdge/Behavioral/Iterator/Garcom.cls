/* GARÇOM - usa sempre a mesma interface, não sabe a estrutura interna */

CLASS Garcom:

    METHOD PUBLIC VOID lerCardapio(INPUT pCardapio AS Cardapio):
        DEFINE VARIABLE it AS IteradorCardapio NO-UNDO.

        it = pCardapio:criarIterador().
        MESSAGE "--- Cardápio ---" VIEW-AS ALERT-BOX INFO.
        DO WHILE it:temProximo():
            MESSAGE "  " + it:proximo() VIEW-AS ALERT-BOX INFO.
        END.
    END METHOD.

END CLASS.
