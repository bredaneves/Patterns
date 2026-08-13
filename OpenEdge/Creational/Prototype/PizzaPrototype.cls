CLASS PizzaPrototype IMPLEMENTS Clonavel :

    DEFINE VARIABLE tamanho AS CHAR.
    DEFINE VARIABLE massa AS CHAR.
    DEFINE VARIABLE molho AS CHAR.
    DEFINE VARIABLE queijo AS CHAR.
    DEFINE VARIABLE ingrediente AS CHAR.

    CONSTRUCTOR PUBLIC PizzaPrototype(INPUT tamanho AS CHAR, INPUT massa AS CHAR, INPUT molho AS CHAR,
                                      INPUT queijo AS CHAR, INPUT ingrediente AS CHAR):
        THIS-OBJECT:tamanho     = tamanho.
        THIS-OBJECT:massa       = massa.
        THIS-OBJECT:molho       = molho.
        THIS-OBJECT:queijo      = queijo.
        THIS-OBJECT:ingrediente = ingrediente.
    END CONSTRUCTOR.

    CONSTRUCTOR PUBLIC PizzaPrototype(INPUT outra AS PizzaPrototype):
        THIS-OBJECT:tamanho     = outra:getTamanho().
        THIS-OBJECT:massa       = outra:getMassa().
        THIS-OBJECT:molho       = outra:getMolho().
        THIS-OBJECT:queijo      = outra:getQueijo().
        THIS-OBJECT:ingrediente = outra:getIngrediente().
    END CONSTRUCTOR.

    METHOD PUBLIC Clonavel clonar():
        RETURN NEW PizzaPrototype(THIS-OBJECT).
    END METHOD.

    METHOD PUBLIC VOID setIngrediente(INPUT ingrediente AS CHAR):
        THIS-OBJECT:ingrediente = ingrediente.
    END METHOD.
         
    METHOD PUBLIC VOID setTamanho(INPUT tamanho AS CHAR):
        THIS-OBJECT:tamanho = tamanho.
    END METHOD.

    METHOD PUBLIC VOID descrever():
        MESSAGE SUBSTITUTE("Pizza &1, &2, &3, &4, &5" ,
                           tamanho, massa, molho, queijo, ingrediente )
            VIEW-AS ALERT-BOX INFO.
    END METHOD.


    METHOD PUBLIC CHAR getTamanho():
        RETURN THIS-OBJECT:tamanho.
    END METHOD.

    METHOD PUBLIC CHAR getMassa():
        RETURN THIS-OBJECT:massa.
    END METHOD.

    METHOD PUBLIC CHAR getMolho():
        RETURN THIS-OBJECT:molho.
    END METHOD.

    METHOD PUBLIC CHAR getQueijo():
        RETURN THIS-OBJECT:queijo.
    END METHOD.

    METHOD PUBLIC CHAR getIngrediente():
        RETURN THIS-OBJECT:ingrediente.
    END METHOD.

END CLASS.
