/* SUBJECT CONCRETO - a cozinha */

CLASS Cozinha IMPLEMENTS Subject:

    DEFINE PRIVATE TEMP-TABLE tt_observers NO-UNDO
        FIELD seq      AS INTEGER
        FIELD observer AS Progress.Lang.Object
        INDEX idx_seq IS PRIMARY UNIQUE seq.

    DEFINE PRIVATE VARIABLE contador AS INTEGER NO-UNDO.

    METHOD PUBLIC VOID inscrever(INPUT pObserver AS Observer):
        contador = contador + 1.

        CREATE tt_observers.
        ASSIGN
            tt_observers.seq      = contador
            tt_observers.observer = pObserver.
    END METHOD.

    METHOD PUBLIC VOID desinscrever(INPUT pObserver AS Observer):
        /* como o Java: remove so a primeira ocorrencia */
        FOR EACH tt_observers:
            IF tt_observers.observer:Equals(pObserver) THEN DO:
                DELETE tt_observers.
                LEAVE.
            END.
        END.
    END METHOD.

    METHOD PUBLIC VOID notificarTodos(INPUT pPedido AS CHARACTER):
        DEFINE VARIABLE obs AS Observer NO-UNDO.

        FOR EACH tt_observers BY tt_observers.seq:
            obs = CAST(tt_observers.observer, Observer).
            obs:atualizar(pPedido).
        END.
    END METHOD.

    METHOD PUBLIC VOID pedidoPronto(INPUT pPedido AS CHARACTER):
        MESSAGE "[Cozinha] Pedido pronto: " + pPedido VIEW-AS ALERT-BOX.
        notificarTodos(pPedido). /* dispara para todos os inscritos */
    END METHOD.

END CLASS.
