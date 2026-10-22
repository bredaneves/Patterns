
CLASS App implements CanalEntrega:
     METHOD PUBLIC VOID entregar(INPUT pizza AS CHAR):
        message "[App] Notificando cliente: " + pizza
        view-as alert-box.
    END METHOD.
END CLASS.
