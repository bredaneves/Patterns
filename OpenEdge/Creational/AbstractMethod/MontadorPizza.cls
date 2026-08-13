CLASS MontadorPizza :

    DEFINE VARIABLE oFabricaPizza AS FabricaPizza NO-UNDO.
    /*oFabricaPizza = NEW FabricaPizza().*/
    
    CONSTRUCTOR PUBLIC MontadorPizza(INPUT fabrica AS FabricaPizza):
        oFabricaPizza = fabrica.
    END CONSTRUCTOR.

    METHOD PUBLIC VOID montar():

        oFabricaPizza:criarMassa():descrever().
        oFabricaPizza:criarMolho():descrever().
        oFabricaPizza:criarIngrediente():descrever().
    END METHOD.
    
END CLASS.
