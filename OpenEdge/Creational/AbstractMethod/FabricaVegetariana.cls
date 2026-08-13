CLASS FabricaVegetariana IMPLEMENTS FabricaPizza :
    
    CONSTRUCTOR PUBLIC FabricaVegetariana():
        DISPLAY "Pizza vegetariana".
    END METHOD.

    METHOD PUBLIC Massa criarMassa():
        DEFINE VARIABLE oMassaIntegral AS MassaIntegral NO-UNDO.
        oMassaIntegral = NEW MassaIntegral().

        RETURN oMassaIntegral.
    END METHOD.

    METHOD PUBLIC Molho criarMolho():
        DEFINE VARIABLE oMolhoErvas AS MolhoErvas NO-UNDO.
        oMolhoErvas = NEW MolhoErvas().

        RETURN oMolhoErvas.
    END METHOD.

    METHOD PUBLIC Ingrediente criarIngrediente():
        DEFINE VARIABLE oLegunesTostados AS LegunesTostados NO-UNDO.
        oLegunesTostados = NEW LegunesTostados().

        RETURN oLegunesTostados.
    END METHOD.
END CLASS.
