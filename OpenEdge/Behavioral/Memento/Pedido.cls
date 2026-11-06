/* ORIGINATOR - o objeto que sabe criar e restaurar seu próprio snapshot */

CLASS Pedido:

    DEFINE PRIVATE VARIABLE pizza   AS CHARACTER NO-UNDO.
    DEFINE PRIVATE VARIABLE tamanho AS CHARACTER NO-UNDO.
    DEFINE PRIVATE VARIABLE valor   AS DECIMAL   NO-UNDO.

    METHOD PUBLIC VOID configurar(INPUT pizza AS CHARACTER, INPUT tamanho AS CHARACTER, INPUT valor AS DECIMAL):
        ASSIGN
            THIS-OBJECT:pizza   = pizza
            THIS-OBJECT:tamanho = tamanho
            THIS-OBJECT:valor   = valor.
    END METHOD.

    /* Cria o snapshot - sem expor atributos privados */
    METHOD PUBLIC PedidoMemento salvar():
        RETURN NEW PedidoMemento(THIS-OBJECT:pizza, THIS-OBJECT:tamanho, THIS-OBJECT:valor).
    END METHOD.

    /* Restaura a partir do snapshot */
    METHOD PUBLIC VOID restaurar(INPUT m AS PedidoMemento):
        ASSIGN
            THIS-OBJECT:pizza   = m:getPizza()
            THIS-OBJECT:tamanho = m:getTamanho()
            THIS-OBJECT:valor   = m:getValor().
    END METHOD.

    METHOD PUBLIC VOID mostrar():
        MESSAGE "Pedido: " + THIS-OBJECT:pizza + " (" + THIS-OBJECT:tamanho + ") R$" + STRING(THIS-OBJECT:valor) VIEW-AS ALERT-BOX.
    END METHOD.

END CLASS.
