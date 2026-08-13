
/*ADAPTER - traduz kg - lbs e delega ao italiano*/
CLASS FornecedorItalianoAdapter IMPLEMENTS Fornecedor:

    DEFINE VARIABLE italiano AS FornecedorItaliano.

    CONSTRUCTOR PUBLIC FornecedorItalianoAdapter(INPUT italiano AS FornecedorItaliano):
        THIS-OBJECT:italiano = italiano.
    END CONSTRUCTOR.
    
    METHOD PUBLIC VOID entregarEmKg(INPUT kg AS DECIMAL):
        DEFINE VARIABLE lbs AS DECIMAL.
        ASSIGN lbs = kg * 2.205. /*conversao*/
        italiano:deliverInPounds(lbs).
    END METHOD.

END CLASS.
