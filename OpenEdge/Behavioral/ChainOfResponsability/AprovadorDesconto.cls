/* HANDLER BASE - cada aprovador conhece o proximo */

CLASS AprovadorDesconto ABSTRACT:

    DEFINE PROTECTED VARIABLE proximo AS AprovadorDesconto NO-UNDO.

    METHOD PUBLIC AprovadorDesconto setProximo(INPUT proximo AS AprovadorDesconto):
        ASSIGN THIS-OBJECT:proximo = proximo.
        RETURN proximo. /* permite encadeamento fluente */
    END METHOD.

    METHOD ABSTRACT VOID aprovar(INPUT VALOR AS DECIMAL).

END CLASS.
