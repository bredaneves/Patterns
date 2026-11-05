/* COMMAND CONCRETO */

CLASS AdicionarPizzaComando IMPLEMENTS Comando:

    DEFINE PRIVATE VARIABLE comanda AS Comanda.
    DEFINE PRIVATE VARIABLE pizza AS CHARACTER.

    CONSTRUCTOR PUBLIC AdicionarPizzaComando(INPUT comanda AS Comanda, INPUT pizza AS CHARACTER):
        THIS-OBJECT:comanda = comanda.
        THIS-OBJECT:pizza = pizza.
    END CONSTRUCTOR.

    METHOD PUBLIC VOID executar():
        THIS-OBJECT:comanda:adicionarItem(THIS-OBJECT:pizza).
    END METHOD.

    METHOD PUBLIC VOID desfazer():
        THIS-OBJECT:comanda:removerItem(THIS-OBJECT:pizza).
    END METHOD.

END CLASS.
