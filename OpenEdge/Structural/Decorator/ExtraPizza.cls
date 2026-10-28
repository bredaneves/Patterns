/* DECORATOR BASE — implementa Pizza e tem uma Pizza dentro */
CLASS ExtraPizza ABSTRACT IMPLEMENTS Pizza:

    DEFINE PROTECTED VARIABLE pizza AS Pizza NO-UNDO. /*a pizza que está "debaixo"*/    

    CONSTRUCTOR PUBLIC ExtraPizza(INPUT pizza AS Pizza):
        THIS-OBJECT:pizza = pizza.
    END CONSTRUCTOR.

    METHOD PUBLIC CHARACTER getDescricao():
        RETURN pizza:getDescricao().
    END METHOD.

    METHOD PUBLIC DECIMAL getPreco():
        RETURN pizza:getPreco().
    END METHOD.
END CLASS.
