
CLASS Pepperoni INHERITS Pizza:

    CONSTRUCTOR PUBLIC Pepperoni(INPUT canal AS CanalEntrega):
        super(canal).
    END CONSTRUCTOR.

     METHOD PUBLIC OVERRIDE VOID preparar(INPUT pizza AS CHAR):
        canal:entregar("Pepperoni").
    END METHOD.
END CLASS.
