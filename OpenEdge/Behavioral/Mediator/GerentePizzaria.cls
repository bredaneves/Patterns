/* MEDIATOR CONCRETO - o Gerente coordena o fluxo */

CLASS GerentePizzaria IMPLEMENTS Mediator :
    DEFINE PUBLIC VARIABLE atendente  AS Atendente NO-UNDO.
    DEFINE PUBLIC VARIABLE cozinha    AS Cozinha NO-UNDO.
    DEFINE PUBLIC VARIABLE entregador AS Entregador NO-UNDO.
    DEFINE PUBLIC VARIABLE caixa      AS Caixa NO-UNDO.
    DEFINE PUBLIC VARIABLE pedido AS CHARACTER NO-UNDO.

    METHOD PUBLIC VOID notificar(INPUT remetente AS Setor, INPUT evento AS CHARACTER):
        IF evento BEGINS "pedido_registrado" THEN DO:
            ASSIGN pedido = ENTRY(2, evento, ":").
            THIS-OBJECT:cozinha:prepararPedido(pedido).
        END.
        ELSE IF evento BEGINS "pedido_pronto" THEN DO:
            ASSIGN pedido = ENTRY(2, evento, ":").
            THIS-OBJECT:entregador:entregar(pedido).
        END.
        ELSE IF evento BEGINS "pedido_entregue" THEN DO:
            ASSIGN pedido = ENTRY(2, evento, ":").
            THIS-OBJECT:caixa:cobrar(pedido).
        END.
    END METHOD.

END CLASS.

