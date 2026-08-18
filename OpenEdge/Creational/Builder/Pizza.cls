/*------------------------------------------------------------------------
    File        : Pizza.cls
    Purpose     : Produto final do padrão Builder
    Syntax      : Progress OpenEdge ABL 10.2B+
    Notes       : Em Java seria uma classe com construtor privado
                  acessível só pelo Builder interno.
                  Em Progress, o construtor é público mas documentado
                  para ser chamado apenas pelo PizzaBuilder.
  ----------------------------------------------------------------------*/

CLASS Pizza:

    /*------------------------------------------------------------------------
      Propriedades públicas com tipo explícito — obrigatório no 10.2B
      PRIVATE SET impede atribuição direta de fora da classe
    ----------------------------------------------------------------------*/
    DEFINE PUBLIC PROPERTY Tamanho          AS CHARACTER NO-UNDO GET. PRIVATE SET.
    DEFINE PUBLIC PROPERTY Massa            AS CHARACTER NO-UNDO GET. PRIVATE SET.
    DEFINE PUBLIC PROPERTY Molho            AS CHARACTER NO-UNDO GET. PRIVATE SET.
    DEFINE PUBLIC PROPERTY Queijo           AS CHARACTER NO-UNDO GET. PRIVATE SET.
    DEFINE PUBLIC PROPERTY BordaRecheada    AS LOGICAL   NO-UNDO GET. PRIVATE SET.
    DEFINE PUBLIC PROPERTY IngredienteExtra AS CHARACTER NO-UNDO GET. PRIVATE SET.

    /*------------------------------------------------------------------------
      Construtor
      Nota: em Java seria privado — em Progress deixamos público mas
      a convenção é: só o PizzaBuilder deve instanciar esta classe.
      Os parâmetros obrigatórios (tamanho e massa) entram aqui.
    ----------------------------------------------------------------------*/
    CONSTRUCTOR PUBLIC Pizza
        ( INPUT pcTamanho AS CHARACTER,
          INPUT pcMassa   AS CHARACTER ):

        THIS-OBJECT:Tamanho = pcTamanho.
        THIS-OBJECT:Massa   = pcMassa.

        /* Defaults para os opcionais */
        THIS-OBJECT:Molho            = "classico".
        THIS-OBJECT:Queijo           = "mussarela".
        THIS-OBJECT:BordaRecheada    = FALSE.
        THIS-OBJECT:IngredienteExtra = "".

    END CONSTRUCTOR.

    /*------------------------------------------------------------------------
      Setters públicos — chamados pelo Builder para preencher os opcionais.
      Em Java seriam package-private. Em Progress simulamos com PUBLIC
      e dependemos da convenção de uso apenas pelo Builder.
    ----------------------------------------------------------------------*/
    METHOD PUBLIC VOID SetMolho( INPUT pcMolho AS CHARACTER ):
        THIS-OBJECT:Molho = pcMolho.
    END METHOD.

    METHOD PUBLIC VOID SetQueijo( INPUT pcQueijo AS CHARACTER ):
        THIS-OBJECT:Queijo = pcQueijo.
    END METHOD.

    METHOD PUBLIC VOID SetBordaRecheada( INPUT plBorda AS LOGICAL ):
        THIS-OBJECT:BordaRecheada = plBorda.
    END METHOD.

    METHOD PUBLIC VOID SetIngredienteExtra( INPUT pcIngrediente AS CHARACTER ):
        THIS-OBJECT:IngredienteExtra = pcIngrediente.
    END METHOD.

    /*------------------------------------------------------------------------
      Exibe o resumo da pizza montada
    ----------------------------------------------------------------------*/
    METHOD PUBLIC VOID Descrever(  ):

        DEFINE VARIABLE cDescricao AS CHARACTER NO-UNDO.

        cDescricao = "Pizza "   + THIS-OBJECT:Tamanho
                   + ", massa " + THIS-OBJECT:Massa
                   + ", molho " + THIS-OBJECT:Molho
                   + ", queijo "+ THIS-OBJECT:Queijo.

        IF THIS-OBJECT:BordaRecheada THEN
            cDescricao = cDescricao + ", borda recheada".

        IF THIS-OBJECT:IngredienteExtra <> "" THEN
            cDescricao = cDescricao + ", extra: " + THIS-OBJECT:IngredienteExtra.

        MESSAGE cDescricao VIEW-AS ALERT-BOX INFO.

    END METHOD.

END CLASS.
