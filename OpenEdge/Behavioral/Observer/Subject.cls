/* INTERFACE SUBJECT - quem dispara eventos */

INTERFACE Subject:
    METHOD VOID inscrever(INPUT pObserver AS Observer).
    METHOD VOID desinscrever(INPUT pObserver AS Observer).
    METHOD VOID notificarTodos(INPUT pPedido AS CHARACTER).
END INTERFACE.
