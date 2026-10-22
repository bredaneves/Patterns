/* ABSTRACAO — pizza (varia na outra dimensao)
   A pizza TEM um canal — nao herda dele */

CLASS Pizza ABSTRACT:

    DEFINE PROTECTED VARIABLE canal AS CanalEntrega NO-UNDO. /*a ponte*/    

    CONSTRUCTOR PUBLIC Pizza(INPUT canal AS CanalEntrega):
        THIS-OBJECT:canal     = canal.        
    END CONSTRUCTOR.

    METHOD PUBLIC ABSTRACT VOID preparar(INPUT pizza AS CHAR).

END CLASS.
