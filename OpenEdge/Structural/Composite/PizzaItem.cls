/* FOLHA — item simples, sem filhos */

CLASS PizzaItem implements ItemPedido:

    DEFINE VARIABLE nome AS CHARACTER NO-UNDO.
    DEFINE VARIABLE preco AS DECIMAL NO-UNDO.

    CONSTRUCTOR PUBLIC PizzaItem(INPUT nome AS CHARACTER, INPUT preco AS DECIMAL):
        ASSIGN
            THIS-OBJECT:nome = nome
            THIS-OBJECT:preco = preco.
    END CONSTRUCTOR.

    METHOD PUBLIC DECIMAL getPreco():
        RETURN THIS-OBJECT:preco.
    END METHOD.

    METHOD PUBLIC VOID descrever(INPUT indent AS CHARACTER):
        message indent + THIS-OBJECT:nome + " R$" + STRING(THIS-OBJECT:preco)
        view-as alert-box.
    END METHOD.
END CLASS.
