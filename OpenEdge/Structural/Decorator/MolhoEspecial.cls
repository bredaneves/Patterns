/* DECORATORS CONCRETOS — cada um adiciona algo e delega o resto */
CLASS MolhoEspecial INHERITS ExtraPizza:

    CONSTRUCTOR PUBLIC MolhoEspecial(INPUT pizza AS Pizza):
        SUPER(pizza).
    END CONSTRUCTOR.

    METHOD OVERRIDE PUBLIC CHARACTER getDescricao():
        RETURN pizza:getDescricao() + ", molho especial".
    END METHOD.

    METHOD OVERRIDE PUBLIC DECIMAL getPreco():
        RETURN pizza:getPreco() + 5.0.
    END METHOD.
END CLASS.
