/* SUBCLASSE 1 - implementa sãoas etapas variáveis */

CLASS PizzaMargherita INHERITS ReceitaPizza:

    METHOD OVERRIDE PROTECTED VOID prepararMassa():
        MESSAGE "Massa fina napolitana" VIEW-AS ALERT-BOX.
    END METHOD.

    METHOD OVERRIDE PROTECTED VOID adicionarMolho():
        MESSAGE "Molho de tomate suave" VIEW-AS ALERT-BOX.
    END METHOD.

    METHOD OVERRIDE PROTECTED VOID adicionarIngredientes():
        MESSAGE "Mussarela fresca e manjericão" VIEW-AS ALERT-BOX.
    END METHOD.

END CLASS.
