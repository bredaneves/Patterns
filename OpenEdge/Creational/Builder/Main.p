/*------------------------------------------------------------------------
    File        : Main.p
    Purpose     : Demonstração do padrão Builder em Progress OpenEdge
    Syntax      : Progress OpenEdge ABL 10.2B+
    Notes       : Equivalente ao main() do Java.
                  Rode este arquivo pelo Procedure Editor.
                  Os arquivos Pizza.cls e PizzaBuilder.cls devem estar
                  no PROPATH sob a estrutura:
                  patterns/creational/builder/
  ----------------------------------------------------------------------*/

USING patterns.creational.builder.*.

DEFINE VARIABLE oBuilder AS CLASS PizzaBuilder NO-UNDO.
DEFINE VARIABLE oPizza   AS CLASS Pizza        NO-UNDO.

DISPLAY "=== Padrao Builder Pizzaria ===" FORMAT "X(50)" WITH FRAME inicio.

/*------------------------------------------------------------------------
  Pizza 1 — Margherita com borda recheada
  Encadeamento fluente: cada método retorna o Builder
----------------------------------------------------------------------*/
oBuilder = NEW PizzaBuilder( "grande", "fina" ).

oPizza = oBuilder
            :SetMolho( "suave" )
            :SetQueijo( "mussarela fresca" )
            :SetBordaRecheada(  )
            :Build(  ).

oPizza:Descrever(  ).
/* → Pizza grande, massa fina, molho suave, queijo mussarela fresca, borda recheada */

/*------------------------------------------------------------------------
  Pizza 2 — Pepperoni com ingrediente extra
  Só os atributos necessários — os demais ficam com valor padrão
----------------------------------------------------------------------*/
oBuilder = NEW PizzaBuilder( "media", "grossa" ).

oPizza = oBuilder
            :SetMolho( "picante" )
            :SetIngredienteExtra( "pepperoni" )
            :Build(  ).

oPizza:Descrever(  ).
/* → Pizza média, massa grossa, molho picante, queijo mussarela, extra: pepperoni */

/*------------------------------------------------------------------------
  Pizza 3 — só os obrigatórios, tudo no padrão
----------------------------------------------------------------------*/
oBuilder = NEW PizzaBuilder( "pequena", "integral" ).

oPizza = oBuilder:Build(  ).

oPizza:Descrever(  ).
/* → Pizza pequena, massa integral, molho clássico, queijo mussarela */

DISP "=== Fim da demonstracao ===" FORMAT "X(50)" WITH FRAME fim.
