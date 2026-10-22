
CLASS Delivery implements CanalEntrega:
     METHOD PUBLIC VOID entregar(INPUT pizza AS CHAR):
        message "[Delivery] Saindo para entrega: " + pizza
        view-as alert-box.
    END METHOD.
END CLASS.
