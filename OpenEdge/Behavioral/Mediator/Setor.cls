/* COMPONENTE BASE - cada setor conhece sao o mediador */

CLASS Setor ABSTRACT :
    DEFINE PROTECTED VARIABLE mediator AS Mediator NO-UNDO.
    
    CONSTRUCTOR PUBLIC Setor(INPUT mediator AS Mediator):
        THIS-OBJECT:mediator = mediator.
    END CONSTRUCTOR.

END CLASS.
