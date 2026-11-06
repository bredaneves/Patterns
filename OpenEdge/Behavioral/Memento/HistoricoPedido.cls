/* CARETAKER - armazena os mementos, não sabe o que está dentro */

CLASS HistoricoPedido:

    DEFINE PRIVATE TEMP-TABLE tt_historico NO-UNDO
        FIELD seq     AS INTEGER
        FIELD memento AS Progress.Lang.Object
        INDEX idx_seq IS PRIMARY UNIQUE seq.

    DEFINE PRIVATE VARIABLE contador AS INTEGER NO-UNDO.

    /* push: empilha no topo */
    METHOD PUBLIC VOID salvar(INPUT pMemento AS PedidoMemento):
        contador = contador + 1.

        CREATE tt_historico.
        ASSIGN
            tt_historico.seq     = contador
            tt_historico.memento = pMemento.
    END METHOD.

    /* pop: devolve o topo e remove; devolve ? se estiver vazio (null no Java) */
    METHOD PUBLIC PedidoMemento desfazer():
        DEFINE VARIABLE m AS PedidoMemento NO-UNDO.

        FIND LAST tt_historico NO-ERROR.

        IF NOT AVAILABLE tt_historico THEN
            RETURN ?.

        m = CAST(tt_historico.memento, PedidoMemento).
        DELETE tt_historico.

        RETURN m.
    END METHOD.

END CLASS.