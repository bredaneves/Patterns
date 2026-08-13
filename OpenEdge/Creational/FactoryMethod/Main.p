

DEFINE VARIABLE p AS Pizzaria NO-UNDO.
p = NEW PizzariaItaliana().
p:fazerPedido().
/*Pizza Margherita: massa fina...*/

DEFINE VARIABLE p2 AS Pizzaria NO-UNDO.
p2 = NEW PizzariaAmericana().
p2:fazerPedido().
/*Pizza Pepperoni: massa grossa...*/

DEFINE VARIABLE p3 AS Pizzaria NO-UNDO.
p3 = NEW PizzariaVegetariana().
p3:fazerPedido().
/*Pizza Vegetariana: massa integral...*/
