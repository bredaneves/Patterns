
CLASS Margherita INHERITS Pizza:

    CONSTRUCTOR PUBLIC Margherita(INPUT canal AS CanalEntrega):
        super(canal).
    END CONSTRUCTOR.

     METHOD PUBLIC OVERRIDE VOID preparar(INPUT pizza AS CHAR):
        canal:entregar("Margherita").
    END METHOD.
END CLASS.
