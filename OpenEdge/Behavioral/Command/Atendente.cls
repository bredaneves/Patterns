
/* INVOKER - registra e executa comandos, mantem historico */
CLASS Atendente:

    DEFINE PRIVATE TEMP-TABLE tt_historico NO-UNDO
        FIELD seq     AS INTEGER
        FIELD comando AS Progress.Lang.Object
        INDEX idx_seq IS PRIMARY UNIQUE seq.

    DEFINE PRIVATE VARIABLE contador AS INTEGER NO-UNDO.

    METHOD PUBLIC VOID executar(INPUT pComando AS Comando):
        pComando:executar().

        /* push: empilha no topo */
        contador = contador + 1.
        CREATE tt_historico.
        ASSIGN
            tt_historico.seq     = contador
            tt_historico.comando = pComando.
    END METHOD.

    METHOD PUBLIC VOID desfazer():
        DEFINE VARIABLE cmd AS Comando NO-UNDO.

        /* topo da pilha = maior seq */
        FIND LAST tt_historico NO-ERROR.

        IF AVAILABLE tt_historico THEN DO:
            cmd = CAST(tt_historico.comando, Comando).
            DELETE tt_historico.   /* pop: remove antes de desfazer, como no Java */
            cmd:desfazer().
        END.
        ELSE
            MESSAGE "Nada para desfazer." VIEW-AS ALERT-BOX.
    END METHOD.

END CLASS.