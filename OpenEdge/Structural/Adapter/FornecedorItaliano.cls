
/*Fornecedor italiano - interface incompativel, nao podemos mudar*/
CLASS FornecedorItaliano:

    METHOD PUBLIC VOID deliverInPounds(INPUT lbs AS DECIMAL):
        DISPLAY SUBSTITUTE("Delivering &1 lbs from Italy", lbs) FORMAT "X(50)".
    END METHOD.
END CLASS.
