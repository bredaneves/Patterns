/* CONTEXTO — representa cada entrega individualmente */
CLASS Entrega:

    DEFINE PRIVATE VARIABLE tipo AS TipoPizza.     /* referência ao flyweight */
    DEFINE PRIVATE VARIABLE endereco AS CHARACTER. /* estado extrínseco */
    DEFINE PRIVATE VARIABLE gps AS CHARACTER.      /* estado extrínseco */

    CONSTRUCTOR PUBLIC Entrega(INPUT tipo AS TipoPizza, INPUT endereco AS CHARACTER, INPUT gps AS CHARACTER):
        ASSIGN
            THIS-OBJECT:tipo = tipo
            THIS-OBJECT:endereco = endereco
            THIS-OBJECT:gps = gps.
    END CONSTRUCTOR.

    METHOD PUBLIC VOID rastrear():
        tipo:rastrear(endereco, gps).
    END METHOD.
END CLASS.
