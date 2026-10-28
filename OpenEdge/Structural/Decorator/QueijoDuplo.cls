/* DECORATORS CONCRETOS — cada um adiciona algo e delega o resto */
CLASS QueijoDuplo INHERITS ExtraPizza:

    CONSTRUCTOR PUBLIC QueijoDuplo(INPUT pizza AS Pizza):
        SUPER(pizza).
    END CONSTRUCTOR.

    METHOD OVERRIDE PUBLIC CHARACTER getDescricao():
        RETURN pizza:getDescricao() + ", queijo duplo".
    END METHOD.

    METHOD OVERRIDE PUBLIC DECIMAL getPreco():
        RETURN pizza:getPreco() + 6.0.
    END METHOD.
END CLASS.
