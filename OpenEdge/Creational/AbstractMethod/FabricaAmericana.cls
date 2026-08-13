CLASS FabricaAmericana IMPLEMENTS FabricaPizza :
    
    CONSTRUCTOR PUBLIC FabricaAmericana():
        DISPLAY "Pizza americana".
    END METHOD.

    METHOD PUBLIC Massa criarMassa():
        DEFINE VARIABLE oMassaGrossa AS MassaGrossa NO-UNDO.
        oMassaGrossa = NEW MassaGrossa().

        RETURN oMassaGrossa.
    END METHOD.

    METHOD PUBLIC Molho criarMolho():
        DEFINE VARIABLE oMolhoPicante AS MolhoPicante NO-UNDO.
        oMolhoPicante = NEW MolhoPicante().

        RETURN oMolhoPicante.
    END METHOD.

    METHOD PUBLIC Ingrediente criarIngrediente():
        DEFINE VARIABLE oPepperoni AS Pepperoni NO-UNDO.
        oPepperoni = NEW Pepperoni().

        RETURN oPepperoni.
    END METHOD.
END CLASS.
