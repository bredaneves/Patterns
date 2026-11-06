
/* VISITOR - pedido com tres itens, dois visitors diferentes */

DEFINE TEMP-TABLE tt_pedido NO-UNDO
    FIELD seq  AS INTEGER
    FIELD item AS Progress.Lang.Object
    INDEX idx_seq IS PRIMARY UNIQUE seq.

DEFINE VARIABLE contador  AS INTEGER   NO-UNDO.
DEFINE VARIABLE imposto   AS Visitor   NO-UNDO.
DEFINE VARIABLE relatorio AS Visitor   NO-UNDO.

/* equivale ao List.of(...): registra um item no pedido */
PROCEDURE adicionarItem:
    DEFINE INPUT PARAMETER pItem AS ItemPedido NO-UNDO.

    contador = contador + 1.

    CREATE tt_pedido.
    ASSIGN
        tt_pedido.seq  = contador
        tt_pedido.item = pItem.
END PROCEDURE.

/* equivale ao pedido.forEach(item -> item.aceitar(visitor)) */
PROCEDURE aplicarVisitor:
    DEFINE INPUT PARAMETER pVisitor AS Visitor NO-UNDO.

    DEFINE VARIABLE it AS ItemPedido NO-UNDO.

    FOR EACH tt_pedido BY tt_pedido.seq:
        it = CAST(tt_pedido.item, ItemPedido).
        it:aceitar(pVisitor).
    END.
END PROCEDURE.

RUN adicionarItem(NEW Pizza("Margherita", 45.0)).
RUN adicionarItem(NEW Bebida("Suco", 12.0)).
RUN adicionarItem(NEW Sobremesa("Tiramisu", 18.0)).

MESSAGE "=== Impostos ===" VIEW-AS ALERT-BOX.
imposto = NEW VisitorImposto().
RUN aplicarVisitor(imposto).

MESSAGE "=== Relatorio ===" VIEW-AS ALERT-BOX.
relatorio = NEW VisitorRelatorio().
RUN aplicarVisitor(relatorio).