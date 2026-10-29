/* ESTRATEGIAS CONCRETAS */

CLASS PagamentoDinheiro IMPLEMENTS FormaPagamento:

    METHOD PUBLIC VOID pagar(INPUT valor AS DECIMAL):
        MESSAGE "Pago em dinheiro: R$" + STRING(valor) + " - aguarde o troco"
            VIEW-AS ALERT-BOX INFO.
    END METHOD.

END CLASS.
