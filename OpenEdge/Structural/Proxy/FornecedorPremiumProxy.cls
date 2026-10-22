/* PROXY com cache — mesma interface, acesso controlado */

CLASS FornecedorPremiumProxy IMPLEMENTS FornecedorPremium:

    DEFINE VARIABLE real AS FornecedorPremiumReal.
    DEFINE VARIABLE cache AS CHARACTER NO-UNDO.

    METHOD PUBLIC CHARACTER consultarCardapio():
        IF cache = ? THEN DO:
            MESSAGE "[PROXY] Cache vazio, consultando real..." VIEW-AS ALERT-BOX.
            IF real = ? THEN real = NEW FornecedorPremiumReal(). /*lazy*/
            cache = real:consultarCardapio().
        END.
        ELSE
            MESSAGE "[PROXY] Retornando do cache" VIEW-AS ALERT-BOX.
        
        return cache.
    END METHOD.
END CLASS.

