CLASS Combo IMPLEMENTS ItemPedido:

    DEFINE PRIVATE VARIABLE nome AS CHARACTER NO-UNDO.

    DEFINE PRIVATE TEMP-TABLE tt_lista NO-UNDO
        FIELD itemPedido AS Progress.Lang.Object.

    CONSTRUCTOR PUBLIC Combo(INPUT nome AS CHARACTER):
        THIS-OBJECT:nome = nome.
    END CONSTRUCTOR.

    METHOD PUBLIC VOID adicionar(INPUT item AS ItemPedido):
        CREATE tt_lista.
        ASSIGN tt_lista.itemPedido = item.
    END METHOD.

    METHOD PUBLIC DECIMAL getPreco():
        DEFINE VARIABLE total AS DECIMAL    NO-UNDO.
        DEFINE VARIABLE item  AS ItemPedido NO-UNDO.

        FOR EACH tt_lista:
            item  = CAST(tt_lista.itemPedido, ItemPedido).
            total = total + item:getPreco().
        END.
        RETURN total.
    END METHOD.

    METHOD PUBLIC VOID descrever(INPUT indent AS CHARACTER):
        DEFINE VARIABLE item AS ItemPedido NO-UNDO.

        MESSAGE indent + THIS-OBJECT:nome + " R$" + STRING(getPreco())
            VIEW-AS ALERT-BOX.

        FOR EACH tt_lista:
            item = CAST(tt_lista.itemPedido, ItemPedido).
            item:descrever(indent + "  ").
        END.
    END METHOD.

END CLASS.
