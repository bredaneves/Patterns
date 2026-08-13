
/*Fornecedor local - ja funciona direto*/
CLASS FornecedorLocal implements Fornecedor:

    METHOD PUBLIC VOID entregarEmKg(INPUT kg AS DECIMAL):
        DISPLAY SUBSTITUTE("Entregando &1 kg localmente", kg) FORMAT "X(50)".
    END METHOD.
END CLASS.
