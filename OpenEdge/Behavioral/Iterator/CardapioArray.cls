/* COLEÇÃO CONCRETA - internamente usa array */

CLASS CardapioArray IMPLEMENTS Cardapio:

    DEFINE PRIVATE TEMP-TABLE tt_itens NO-UNDO
        FIELD posicao   AS INTEGER
        FIELD descricao AS CHARACTER
        INDEX idx_posicao IS PRIMARY UNIQUE posicao.

    DEFINE PRIVATE VARIABLE capacidade AS INTEGER NO-UNDO.
    DEFINE PRIVATE VARIABLE tamanho    AS INTEGER NO-UNDO.

    CONSTRUCTOR PUBLIC CardapioArray(INPUT pCapacidade AS INTEGER):
        THIS-OBJECT:capacidade = pCapacidade.
    END CONSTRUCTOR.

    METHOD PUBLIC VOID adicionar(INPUT pItem AS CHARACTER):
        /* o array do Java tem tamanho fixo; mantemos o limite */
        IF tamanho >= capacidade THEN DO:
            MESSAGE "Cardapio cheio. Nao foi possivel adicionar: " + pItem
                VIEW-AS ALERT-BOX ERROR.
            RETURN.
        END.

        tamanho = tamanho + 1.

        CREATE tt_itens.
        ASSIGN
            tt_itens.posicao   = tamanho
            tt_itens.descricao = pItem.
    END METHOD.

    METHOD PUBLIC IteradorCardapio criarIterador():
        RETURN NEW IteradorArray(THIS-OBJECT).
    END METHOD.

    /* usados pelo iterador */
    METHOD PUBLIC INTEGER getTamanho():
        RETURN tamanho.
    END METHOD.

    METHOD PUBLIC CHARACTER getItem(INPUT pPosicao AS INTEGER):
        FIND tt_itens WHERE tt_itens.posicao = pPosicao NO-ERROR.

        IF AVAILABLE tt_itens THEN
            RETURN tt_itens.descricao.

        RETURN ?.
    END METHOD.

END CLASS.