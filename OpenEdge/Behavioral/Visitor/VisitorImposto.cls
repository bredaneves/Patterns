/* VISITOR 1 - calcula imposto por tipo de item */

CLASS VisitorImposto IMPLEMENTS Visitor:

    METHOD PUBLIC VOID visitar(INPUT pizza AS Pizza):
        MESSAGE "Imposto pizza '" + pizza:getNome() + "': R$" + STRING(pizza:getPreco() * 0.12) VIEW-AS ALERT-BOX.
    END METHOD.

    METHOD PUBLIC VOID visitar(INPUT bebida AS Bebida):
        MESSAGE "Imposto bebida '" + bebida:getNome() + "': R$" + STRING(bebida:getPreco() * 0.20) VIEW-AS ALERT-BOX.
    END METHOD.

    METHOD PUBLIC VOID visitar(INPUT sobremesa AS Sobremesa):
        MESSAGE "Imposto sobremesa '" + sobremesa:getNome() + "': R$" + STRING(sobremesa:getPreco() * 0.08) VIEW-AS ALERT-BOX.
    END METHOD.

END CLASS.
