/* CONTEXTO - o Pedido delega tudo ao estado atual */

CLASS Pedido:

    DEFINE PRIVATE VARIABLE estado AS EstadoPedido.    

    CONSTRUCTOR PUBLIC Pedido():
        THIS-OBJECT:estado = NEW EstadoRecebido().
    END CONSTRUCTOR.

    METHOD PUBLIC VOID setEstado(INPUT estado AS EstadoPedido):
        THIS-OBJECT:estado = estado.
    END METHOD.

    METHOD PUBLIC VOID avancar():
        THIS-OBJECT:estado:avancar(THIS-OBJECT).
    END METHOD.

    METHOD PUBLIC VOID cancelar():
        THIS-OBJECT:estado:cancelar(THIS-OBJECT).
    END METHOD.

    METHOD PUBLIC CHARACTER getEstado():
        RETURN THIS-OBJECT:estado:getDescricao().
    END METHOD.

END CLASS.
