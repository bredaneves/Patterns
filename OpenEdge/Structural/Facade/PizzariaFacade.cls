
/* FACADE - esconde toda a complexidade atras de metodos simples */
CLASS PizzariaFacade:

    DEFINE VARIABLE forno AS Forno NO-UNDO.
    DEFINE VARIABLE estoque AS Estoque NO-UNDO.
    DEFINE VARIABLE pedidos AS SistemaPedidos NO-UNDO.
    DEFINE VARIABLE caixa AS Caixa NO-UNDO.
    DEFINE VARIABLE entregadores AS Entregadores NO-UNDO.

    CONSTRUCTOR PUBLIC PizzariaFacade():
        ASSIGN forno = new Forno().
        ASSIGN estoque = new Estoque().
        ASSIGN pedidos = NEW SistemaPedidos().
        ASSIGN caixa = NEW Caixa().
        ASSIGN entregadores = NEW Entregadores().
    END METHOD.

    METHOD PUBLIC VOID abrirPizzaria():
        DISPLAY "=== Abrindo a pizzaria ===" FORMAT "X(50)" WITH FRAME a.
        forno:ligar().
        estoque:verificar().
        pedidos:ativar().
        caixa:abrir().
        entregadores:notificar().
    END METHOD.

    METHOD PUBLIC VOID fecharPizzaria():
        DISPLAY "=== Fechando a pizzaria ===" FORMAT "X(50)" WITH FRAME b.
        pedidos:desativar().
        caixa:fechar().
        forno:desligar().
    END METHOD.

END CLASS.
