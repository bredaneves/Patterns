/* ESTRATEGIAS CONCRETAS */

CLASS PagamentoPix implements FormaPagamento :

    METHOD VOID pagar(INPUT valor AS DECIMAL):
        DEFINE VARIABLE total AS DECIMAL NO-UNDO.
        total = valor * 0.95. /* 5% de desconto */
        MESSAGE "Pago via Pix: R$" + STRING(total) + " (com desconto)".
    END METHOD.
END CLASS.
