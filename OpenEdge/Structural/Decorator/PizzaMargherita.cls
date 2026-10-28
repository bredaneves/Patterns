/* COMPONENTE CONCRETO — pizza base */
CLASS PizzaMargherita IMPLEMENTS Pizza:

    METHOD PUBLIC CHARACTER getDescricao():
        RETURN "Margherita".
    END METHOD.

    METHOD PUBLIC DECIMAL getPreco():
        RETURN 40.0.
    END METHOD.
END CLASS.
