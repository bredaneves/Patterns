

DEFINE VARIABLE m1 AS MontadorPizza NO-UNDO.
m1 = NEW MontadorPizza(NEW FabricaItaliana()).
m1:montar().
/*Massa fina / Molho suave / Mussarela fresca*/

DEFINE VARIABLE m2 AS MontadorPizza NO-UNDO.
m2 = NEW MontadorPizza(NEW FabricaAmericana()).
m2:montar().
/*Massa grossa / Molho picante / Pepperoni*/

DEFINE VARIABLE m3 AS MontadorPizza NO-UNDO.
m3 = NEW MontadorPizza(NEW FabricaVegetariana()).
m3:montar().
/*Massa integral / Molho de ervas / Legumes tostados*/
