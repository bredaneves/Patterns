
DEFINE VARIABLE cardapio AS CardapioPizzas.
ASSIGN cardapio = new CardapioPizzas().

/*Registra os prototipos base uma vez so*/
cardapio:registrar("calabresa",
                    new PizzaPrototype("media", "fina", "classico", "mussarela", "calabresa")).

cardapio:registrar("frango",
                    new PizzaPrototype("media", "fina", "branco", "mussarela", "frango")).


/*Pedido 1: calabresa normal*/
DISPLAY "Montando pizza 1" WITH FRAME a.
DEFINE VARIABLE pedido1 AS PizzaPrototype.
ASSIGN pedido1 = cardapio:obter("calabresa").


/*Pedido 2: calabresa dupla (copia + ajuste)*/
DISPLAY "Montando pizza 2" WITH FRAME b.
DEFINE VARIABLE pedido2 AS PizzaPrototype.
ASSIGN pedido2 = cardapio:obter("calabresa").
pedido2:setIngrediente("calabresa dupla").
pedido2:descrever().

        
/*O original nao foi afetado*/
DISPLAY "Montando pizza 3" WITH FRAME c.
DEFINE VARIABLE pedido3 AS PizzaPrototype.
ASSIGN pedido3 = cardapio:obter("calabresa").
pedido3:descrever().
/*Pizza media, fina, classico, mussarela, calabresa intacto*/
