
CLASS CardapioPizzas :

    DEF TEMP-TABLE tt_cardapio 
        FIELD nome AS CHAR
        FIELD pizza AS CLASS Progress.Lang.Object.

    METHOD PUBLIC VOID registrar(INPUT nome AS CHAR, INPUT pizza AS PizzaPrototype):
        
        CREATE tt_cardapio.
        ASSIGN tt_cardapio.nome = nome
               tt_cardapio.pizza = pizza.
    END METHOD.


    METHOD PUBLIC PizzaPrototype obter(INPUT nome AS CHAR):
        DEFINE VARIABLE oPizza AS PizzaPrototype.
        
        FIND FIRST tt_cardapio
            WHERE tt_cardapio.nome = nome NO-ERROR.
        IF AVAIL tt_cardapio THEN
            ASSIGN oPizza = CAST(tt_cardapio.pizza, PizzaPrototype).

        RETURN oPizza.
    END METHOD.
    
END CLASS.




