/* FABRICA DO FLYWEIGHT — garante que o mesmo tipo nunca e criado duas vezes */
CLASS TipoPizzaFactory:

    DEFINE PRIVATE STATIC TEMP-TABLE tt_cache NO-UNDO
        FIELD chave AS CHARACTER
        FIELD tipo  AS Progress.Lang.Object
        INDEX idx_chave IS PRIMARY UNIQUE chave.

    METHOD PUBLIC STATIC TipoPizza obter(INPUT nome AS CHARACTER,
                                         INPUT ingredientes AS CHARACTER,
                                         INPUT preco AS DECIMAL):

        FIND tt_cache WHERE tt_cache.chave = nome NO-ERROR.

        IF NOT AVAILABLE tt_cache THEN DO:
            MESSAGE "[Factory] Criando TipoPizza: " + nome
                VIEW-AS ALERT-BOX INFO BUTTONS OK.

            CREATE tt_cache.
            ASSIGN
                tt_cache.chave = nome
                tt_cache.tipo  = NEW TipoPizza(nome, ingredientes, preco).
        END.

        RETURN CAST(tt_cache.tipo, TipoPizza). /* reutiliza o mesmo objeto */
    END METHOD.

    METHOD PUBLIC STATIC INTEGER totalCriados():
        DEFINE VARIABLE total AS INTEGER NO-UNDO.

        FOR EACH tt_cache:
            total = total + 1.
        END.
        RETURN total.
    END METHOD.

END CLASS.
