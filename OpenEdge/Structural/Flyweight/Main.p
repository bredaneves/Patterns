/* USO - 3 entregas, so 2 TipoPizza criados na memoria */

DEFINE TEMP-TABLE tt_entregas NO-UNDO
    FIELD seq     AS INTEGER
    FIELD entrega AS Progress.Lang.Object
    INDEX idx_seq IS PRIMARY UNIQUE seq.

DEFINE VARIABLE ent      AS Entrega NO-UNDO.
DEFINE VARIABLE contador AS INTEGER NO-UNDO.
DEFINE VARIABLE e1       AS Entrega NO-UNDO.
DEFINE VARIABLE e2       AS Entrega NO-UNDO.
DEFINE VARIABLE e3       AS Entrega NO-UNDO.

PROCEDURE adicionarEntrega:
    DEFINE INPUT PARAMETER pEntrega AS Entrega NO-UNDO.

    contador = contador + 1.

    CREATE tt_entregas.
    ASSIGN
        tt_entregas.seq     = contador
        tt_entregas.entrega = pEntrega.
END PROCEDURE.

e1 = NEW Entrega(TipoPizzaFactory:obter("Margherita", "mussarela, manjericao", 40.0),
                 "Rua A, 100", "-23.5, -46.6").
e2 = NEW Entrega(TipoPizzaFactory:obter("Pepperoni", "pepperoni, mussarela", 52.0),
                 "Rua B, 200", "-23.6, -46.7").
e3 = NEW Entrega(TipoPizzaFactory:obter("Margherita", "mussarela, manjericao", 40.0),
                 "Rua C, 300", "-23.4, -46.5").

RUN adicionarEntrega(e1).
RUN adicionarEntrega(e2).
RUN adicionarEntrega(e3).

FOR EACH tt_entregas BY tt_entregas.seq:
    ent = CAST(tt_entregas.entrega, Entrega).
    ent:rastrear().
END.

MESSAGE "TipoPizza criados: " + STRING(TipoPizzaFactory:totalCriados())
    VIEW-AS ALERT-BOX.
