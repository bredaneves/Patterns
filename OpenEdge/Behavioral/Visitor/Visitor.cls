/* INTERFACE VISITOR - uma operação para cada tipo de elemento */

INTERFACE Visitor:

    METHOD VOID visitar(INPUT pizza     AS Pizza).
    METHOD VOID visitar(INPUT bebida    AS Bebida).
    METHOD VOID visitar(INPUT sobremesa AS Sobremesa).
END INTERFACE.
