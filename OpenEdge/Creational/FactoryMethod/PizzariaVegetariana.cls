CLASS PizzariaVegetariana INHERITS Pizzaria :   

    METHOD OVERRIDE PUBLIC Pizza criarPizza():

        DEFINE VARIABLE oPizzaVegetariana AS PizzaVegetariana NO-UNDO.
        oPizzaVegetariana = NEW PizzaVegetariana().

        RETURN oPizzaVegetariana.
    END METHOD.
END CLASS.
