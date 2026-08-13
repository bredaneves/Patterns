CLASS Pizzaria ABSTRACT:

    METHOD PUBLIC ABSTRACT Pizza criarPizza().

    METHOD PUBLIC VOID fazerPedido():

        DEFINE VARIABLE oPizza AS Pizza NO-UNDO.
        oPizza = criarPizza().

        oPizza:preparar().

        DISPLAY "Pedido pronto!".
                
    END METHOD.
END CLASS.
