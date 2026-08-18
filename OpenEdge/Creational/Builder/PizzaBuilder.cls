/*------------------------------------------------------------------------
    File        : PizzaBuilder.cls
    Purpose     : Builder do padrão Builder — substitui a classe interna
                  do Java. Em Progress não há suporte a classes internas,
                  então o Builder vive como classe externa no mesmo package.
    Syntax      : Progress OpenEdge ABL 10.2B+
    Notes       : Cada método retorna THIS-OBJECT para permitir
                  encadeamento fluente igual ao Java:
                  oBuild:SetMolho("suave"):SetQueijo("mussarela"):Build()
  ----------------------------------------------------------------------*/

CLASS PizzaBuilder:

    DEFINE PRIVATE VARIABLE oPizza AS CLASS Pizza NO-UNDO.

    /*------------------------------------------------------------------------
      Construtor — recebe os atributos OBRIGATÓRIOS
      Cria a Pizza internamente. Tudo que vier depois é opcional.
    ----------------------------------------------------------------------*/
    CONSTRUCTOR PUBLIC PizzaBuilder
        ( INPUT pcTamanho AS CHARACTER,
          INPUT pcMassa   AS CHARACTER ):

        oPizza = NEW Pizza( pcTamanho, pcMassa ).

    END CONSTRUCTOR.

    /*------------------------------------------------------------------------
      Métodos fluentes — cada um configura um atributo opcional
      e devolve o próprio Builder para encadeamento
    ----------------------------------------------------------------------*/
    METHOD PUBLIC CLASS PizzaBuilder SetMolho
        ( INPUT pcMolho AS CHARACTER ):

        oPizza:SetMolho( pcMolho ).
        RETURN THIS-OBJECT.

    END METHOD.

    METHOD PUBLIC CLASS PizzaBuilder SetQueijo
        ( INPUT pcQueijo AS CHARACTER ):

        oPizza:SetQueijo( pcQueijo ).
        RETURN THIS-OBJECT.

    END METHOD.

    METHOD PUBLIC CLASS PizzaBuilder SetBordaRecheada(  ):

        oPizza:SetBordaRecheada( TRUE ).
        RETURN THIS-OBJECT.

    END METHOD.

    METHOD PUBLIC CLASS PizzaBuilder SetIngredienteExtra
        ( INPUT pcIngrediente AS CHARACTER ):

        oPizza:SetIngredienteExtra( pcIngrediente ).
        RETURN THIS-OBJECT.

    END METHOD.

    /*------------------------------------------------------------------------
      Build — entrega o produto final
      Após chamar Build(), o Builder não deve ser reutilizado.
    ----------------------------------------------------------------------*/
    METHOD PUBLIC CLASS Pizza Build(  ):

        RETURN oPizza.

    END METHOD.

END CLASS.
