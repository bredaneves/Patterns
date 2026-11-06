
CLASS IteradorLista IMPLEMENTS IteradorCardapio:

    DEFINE PRIVATE VARIABLE origem  AS CardapioLista NO-UNDO.   /* a List<String> */
    DEFINE PRIVATE VARIABLE posicao AS INTEGER NO-UNDO INITIAL 0. /* o cursor interno do Iterator<String> it */

    CONSTRUCTOR PUBLIC IteradorLista(INPUT pCardapio AS CardapioLista):   /* itens.iterator() */
        THIS-OBJECT:origem = pCardapio.
    END CONSTRUCTOR.

    METHOD PUBLIC LOGICAL temProximo():                                   /* it.hasNext() */
        RETURN posicao < origem:getTamanho().
    END METHOD.

    METHOD PUBLIC CHARACTER proximo():                                    /* it.next() */
        posicao = posicao + 1.
        RETURN origem:getItem(posicao).
    END METHOD.

END CLASS.
