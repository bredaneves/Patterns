CLASS FabricaItaliana IMPLEMENTS FabricaPizza :
    
    CONSTRUCTOR PUBLIC FabricaItaliana():
        DISPLAY "Pizza americana".
    END METHOD.

    METHOD PUBLIC Massa criarMassa():
        DEFINE VARIABLE oMassaFina AS MassaFina NO-UNDO.
        oMassaFina = NEW MassaFina().

        RETURN oMassaFina.
    END METHOD.

    METHOD PUBLIC Molho criarMolho():
        DEFINE VARIABLE oMolhoSuave AS MolhoSuave NO-UNDO.
        oMolhoSuave = NEW MolhoSuave().

        RETURN oMolhoSuave.
    END METHOD.

    METHOD PUBLIC Ingrediente criarIngrediente():
        DEFINE VARIABLE oMussarela AS Mussarela NO-UNDO.
        oMussarela = NEW Mussarela().

        RETURN oMussarela.
    END METHOD.
END CLASS.
