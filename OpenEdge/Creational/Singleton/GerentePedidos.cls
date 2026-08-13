CLASS GerentePedidos :

    /* 1 - A Unica instancia fica guardada aqui, estatica e privada*/
    DEFINE PUBLIC STATIC VARIABLE instancia AS GerentePedidos.

    DEF TEMP-TABLE tt_fila
        FIELD pedido AS CHAR.

    /*2 - Construtor PRIVADO - ninguem de fora pode chamar "new"*/
    CONSTRUCTOR PRIVATE GerentePedidos():
    END CONSTRUCTOR.

    /*3 - Ponto de acesso global - cria so se ainda nao existe*/
    METHOD PUBLIC STATIC GerentePedidos getInstance():

        IF NOT VALID-OBJECT(instancia) THEN
            instancia = NEW GerentePedidos(). /*cria uma vez*/

        RETURN instancia. 
    END METHOD.


    METHOD PUBLIC VOID adicionarPedido(INPUT pedido AS CHAR):
        CREATE tt_fila.
        ASSIGN tt_fila.pedido = pedido.
        
        DISPLAY "Pedido adicionado: " + pedido FORMAT "X(50)".
    END METHOD.


    METHOD PUBLIC VOID mostrarFila():
        FOR EACH tt_fila :
            DISPLAY "Fila atual: " + tt_fila.pedido FORMAT "X(50)".
        END.
    END METHOD.

END CLASS.
