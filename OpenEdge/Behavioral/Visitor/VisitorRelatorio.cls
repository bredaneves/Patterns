/* VISITOR 2 - gera relatório simples */

CLASS VisitorRelatorio IMPLEMENTS Visitor:

    METHOD PUBLIC VOID visitar(INPUT pizza AS Pizza):
        MESSAGE "[PIZZA]     " + pizza:getNome() + " R$" + STRING(pizza:getPreco()) VIEW-AS ALERT-BOX.
    END METHOD.

    METHOD PUBLIC VOID visitar(INPUT bebida AS Bebida):
        MESSAGE "[BEBIDA]    " + bebida:getNome() + " R$" + STRING(bebida:getPreco()) VIEW-AS ALERT-BOX.
    END METHOD.

    METHOD PUBLIC VOID visitar(INPUT sobremesa AS Sobremesa):
        MESSAGE "[SOBREMESA] " + sobremesa:getNome() + " R$" + STRING(sobremesa:getPreco()) VIEW-AS ALERT-BOX.
    END METHOD.

END CLASS.
