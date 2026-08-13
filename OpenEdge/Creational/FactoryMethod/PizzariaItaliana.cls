CLASS PizzariaItaliana INHERITS Pizzaria :   

    METHOD OVERRIDE PUBLIC Pizza criarPizza():

        DEFINE VARIABLE oPizzaMargherita AS PizzaMargherita NO-UNDO.
        oPizzaMargherita = NEW PizzaMargherita().

        RETURN oPizzaMargherita.
    END METHOD.
END CLASS.
