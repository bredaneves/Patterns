/* MEMENTO - guarda o estado, nao expõe nada */

CLASS PedidoMemento:

    DEFINE PRIVATE VARIABLE pizza   AS CHARACTER NO-UNDO.
    DEFINE PRIVATE VARIABLE tamanho AS CHARACTER NO-UNDO.
    DEFINE PRIVATE VARIABLE valor   AS DECIMAL   NO-UNDO.

    CONSTRUCTOR PUBLIC PedidoMemento (INPUT pizza AS CHARACTER, INPUT tamanho AS CHARACTER, INPUT valor AS DECIMAL):
        ASSIGN
            THIS-OBJECT:pizza   = pizza
            THIS-OBJECT:tamanho = tamanho
            THIS-OBJECT:valor   = valor.
    END CONSTRUCTOR.

    METHOD PUBLIC CHARACTER getPizza():
        RETURN THIS-OBJECT:pizza.
    END METHOD.

    METHOD PUBLIC CHARACTER getTamanho():
        RETURN THIS-OBJECT:tamanho.
    END METHOD.

    METHOD PUBLIC DECIMAL getValor():
        RETURN THIS-OBJECT:valor.
    END METHOD.

END CLASS.
