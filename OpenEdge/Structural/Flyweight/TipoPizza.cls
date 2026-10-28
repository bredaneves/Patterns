/* FLYWEIGHT — estado intrinseco, compartilhado e imutavel */
CLASS TipoPizza:

    DEFINE PRIVATE VARIABLE nome AS CHARACTER.
    DEFINE PRIVATE VARIABLE ingredientes AS CHARACTER.
    DEFINE PRIVATE VARIABLE precoBase AS DECIMAL.

    CONSTRUCTOR PUBLIC TipoPizza(INPUT nome AS CHARACTER, INPUT ingredientes AS CHARACTER, INPUT precoBase AS DECIMAL):
        THIS-OBJECT:nome = nome.
        THIS-OBJECT:ingredientes = ingredientes.
        THIS-OBJECT:precoBase = precoBase.
    END CONSTRUCTOR.

    /* Recebe o estado extrinseco como parâmetro */
    METHOD PUBLIC VOID rastrear(INPUT endereco AS CHARACTER, INPUT gps AS CHARACTER):
        MESSAGE "[Rastreio] " + THIS-OBJECT:nome + " → " + endereco + " (" + gps + ")" VIEW-AS ALERT-BOX INFO BUTTONS OK.
    END METHOD.
END CLASS.
