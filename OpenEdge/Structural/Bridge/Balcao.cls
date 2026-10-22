
CLASS Balcao implements CanalEntrega:
     METHOD PUBLIC VOID entregar(INPUT pizza AS CHAR):
        message "[Balcão] Entregando: " + pizza
        view-as alert-box.
    END METHOD.
END CLASS.
