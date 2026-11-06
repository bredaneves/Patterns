/* ITERATOR CONCRETO - sabe como percorrer o array */

CLASS IteradorArray IMPLEMENTS IteradorCardapio:

    DEFINE PRIVATE VARIABLE origem  AS CardapioArray NO-UNDO.   /* String[] itens */
    DEFINE PRIVATE VARIABLE total   AS INTEGER NO-UNDO.         /* int tamanho    */
    DEFINE PRIVATE VARIABLE posicao AS INTEGER NO-UNDO INITIAL 0.

    CONSTRUCTOR PUBLIC IteradorArray(INPUT pCardapio AS CardapioArray):
        THIS-OBJECT:origem = pCardapio.
        THIS-OBJECT:total  = pCardapio:getTamanho().
    END CONSTRUCTOR.

    METHOD PUBLIC LOGICAL temProximo():                         /* hasNext() */
        RETURN posicao < total.
    END METHOD.

    METHOD PUBLIC CHARACTER proximo():                          /* next()    */
        posicao = posicao + 1.
        RETURN origem:getItem(posicao).
    END METHOD.

END CLASS.
