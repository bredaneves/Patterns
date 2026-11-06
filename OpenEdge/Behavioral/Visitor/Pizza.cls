/* ELEMENTOS CONCRETOS - não sabem se aceitar e se identificar */

CLASS Pizza IMPLEMENTS ItemPedido:

    DEFINE PRIVATE VARIABLE nome AS CHARACTER.
    DEFINE PRIVATE VARIABLE preco AS DECIMAL.

    CONSTRUCTOR PUBLIC Pizza(INPUT nome AS CHARACTER, INPUT preco AS DECIMAL):
        THIS-OBJECT:nome = nome.
        THIS-OBJECT:preco = preco.
    END CONSTRUCTOR.

    METHOD PUBLIC CHARACTER getNome():
        RETURN THIS-OBJECT:nome.
    END METHOD.

    METHOD PUBLIC DECIMAL getPreco():
        RETURN THIS-OBJECT:preco.
    END METHOD.

    METHOD PUBLIC VOID aceitar(INPUT visitor AS Visitor):
        visitor:visitar(THIS-OBJECT). /* double dispatch */
    END METHOD.

END CLASS.
