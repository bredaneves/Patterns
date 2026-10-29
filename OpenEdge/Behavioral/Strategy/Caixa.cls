/* CONTEXTO - o caixa nao sabe qual estrategia esta usando */

CLASS Caixa:

    DEFINE VARIABLE formaPagamento AS FormaPagamento NO-UNDO.

    /* Estrategia pode ser trocada em tempo de execucao */
    METHOD PUBLIC VOID setFormaPagamento(INPUT formaPg AS FormaPagamento):
        ASSIGN THIS-OBJECT:formaPagamento = formaPg.
    END METHOD.

    METHOD PUBLIC VOID finalizarPedido(INPUT valor AS DECIMAL):
        formaPagamento:pagar(valor).
    END METHOD.

END CLASS.
