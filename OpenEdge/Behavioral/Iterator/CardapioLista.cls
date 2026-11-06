/* OUTRA COLEÇÃO ? internamente usa List (estrutura diferente) */

CLASS CardapioLista IMPLEMENTS Cardapio:

    DEFINE PRIVATE TEMP-TABLE tt_itens NO-UNDO
        FIELD posicao   AS INTEGER
        FIELD descricao AS CHARACTER
        INDEX idx_posicao IS PRIMARY UNIQUE posicao.

    DEFINE PRIVATE VARIABLE tamanho AS INTEGER NO-UNDO.

    METHOD PUBLIC VOID adicionar(INPUT pItem AS CHARACTER):
        tamanho = tamanho + 1.

        CREATE tt_itens.
        ASSIGN
            tt_itens.posicao   = tamanho
            tt_itens.descricao = pItem.
    END METHOD.

    METHOD PUBLIC IteradorCardapio criarIterador():
        RETURN NEW IteradorLista(THIS-OBJECT).
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
