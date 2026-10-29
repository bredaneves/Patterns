/* ESTRATEGIAS CONCRETAS */

CLASS PagamentoCartao implements FormaPagamento :

    METHOD VOID pagar(INPUT valor AS DECIMAL):
        DEFINE VARIABLE total AS DECIMAL NO-UNDO.
        total = valor * 1.03. /* 3% de taxa */
        MESSAGE "Pago no cartao: R$" + STRING(total) + " (com taxa)".
    END METHOD.
END CLASS.
