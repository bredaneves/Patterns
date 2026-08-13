CLASS PizzariaAmericana INHERITS Pizzaria :   

    METHOD OVERRIDE PUBLIC Pizza criarPizza():

        DEFINE VARIABLE oPizzaPepperoni AS PizzaPepperoni NO-UNDO.
        oPizzaPepperoni = NEW PizzaPepperoni().

        RETURN oPizzaPepperoni.
    END METHOD.
END CLASS.
