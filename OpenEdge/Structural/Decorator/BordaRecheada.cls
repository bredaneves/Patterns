/* DECORATORS CONCRETOS — cada um adiciona algo e delega o resto */
CLASS BordaRecheada INHERITS ExtraPizza:

    CONSTRUCTOR PUBLIC BordaRecheada(INPUT pizza AS Pizza):
        SUPER(pizza).
    END CONSTRUCTOR.

    METHOD OVERRIDE PUBLIC CHARACTER getDescricao():
        RETURN pizza:getDescricao() + ", borda recheada".
    END METHOD.

    METHOD OVERRIDE PUBLIC DECIMAL getPreco():
        RETURN pizza:getPreco() + 8.0.
    END METHOD.
END CLASS.
