/* CLASSE BASE - define o template (sequência fixa) */

CLASS ReceitaPizza ABSTRACT:

    METHOD PUBLIC FINAL VOID preparar():
        THIS-OBJECT:prepararMassa().
        THIS-OBJECT:adicionarMolho().
        THIS-OBJECT:adicionarIngredientes().
        THIS-OBJECT:assar().
        THIS-OBJECT:finalizar().  /* hook - opcional, tem implementação padrão */
    END METHOD.

    /* Etapas obrigatórias - subclasses devem implementar */
    METHOD PROTECTED ABSTRACT VOID prepararMassa().
    METHOD PROTECTED ABSTRACT VOID adicionarMolho().
    METHOD PROTECTED ABSTRACT VOID adicionarIngredientes().

    /* Etapa comum - igual para todas */
    METHOD PROTECTED VOID assar():
        MESSAGE "Assando por 12 minutos a 280°C" VIEW-AS ALERT-BOX.
    END METHOD.

    /* Hook - subclasse pode sobrescrever ou não */
    METHOD PROTECTED VOID finalizar():
        MESSAGE "Pizza pronta!" VIEW-AS ALERT-BOX.
    END METHOD.

END CLASS.
