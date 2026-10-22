/* Objeto real — caro para consultar */

CLASS FornecedorPremiumReal IMPLEMENTS FornecedorPremium:

    DEFINE VARIABLE real AS FornecedorPremiumReal.
    DEFINE VARIABLE cache AS CHARACTER NO-UNDO.

    METHOD PUBLIC CHARACTER consultarCardapio():
        MESSAGE "[REAL] Consultando fornecedor italiano... (custoso!)" VIEW-AS ALERT-BOX.
        /* Simula chamada cara (API paga, rede lenta...) */
        return "Cardápio: Burrata, Prosciutto, Tartufo".
    END METHOD.
END CLASS.

