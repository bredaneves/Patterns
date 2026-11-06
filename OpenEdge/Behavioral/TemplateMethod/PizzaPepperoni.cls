/* SUBCLASSE 2 - diferente em cada etapa, e sobrescreve o hook */

CLASS PizzaPepperoni INHERITS ReceitaPizza:

    METHOD OVERRIDE PROTECTED VOID prepararMassa():
        MESSAGE "Massa grossa americana" VIEW-AS ALERT-BOX.
    END METHOD.

    METHOD OVERRIDE PROTECTED VOID adicionarMolho():
        MESSAGE "Molho picante" VIEW-AS ALERT-BOX.
    END METHOD.

    METHOD OVERRIDE PROTECTED VOID adicionarIngredientes():
        MESSAGE "Pepperoni e cheddar" VIEW-AS ALERT-BOX.
    END METHOD.

    /* Sobrescreve o hook para adicionar etapa extra */
    METHOD OVERRIDE PROTECTED VOID finalizar():
        MESSAGE "Adicionando orégano por cima." VIEW-AS ALERT-BOX.
        SUPER:finalizar().
    END METHOD.

END CLASS.
