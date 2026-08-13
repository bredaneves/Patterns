CLASS Estoque:

    METHOD PUBLIC VOID receberIngredientes(INPUT f AS Fornecedor, INPUT kg AS DECIMAL):
        f:entregarEmKg(kg). /*sempre chama a mesma interface*/
    END METHOD.

END CLASS.
