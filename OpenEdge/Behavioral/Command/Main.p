
DEFINE VARIABLE comanda AS Comanda.
ASSIGN comanda = new Comanda().

DEFINE VARIABLE atendente AS Atendente.
ASSIGN atendente = new Atendente().

atendente:executar(new AdicionarPizzaComando(comanda, "Margherita")).
atendente:executar(new AdicionarPizzaComando(comanda, "Pepperoni")).
comanda:mostrar(). /* [Margherita, Pepperoni]*/

atendente:desfazer(). /* Remove Pepperoni*/
comanda:mostrar(). /* [Margherita] */

atendente:desfazer(). /* Remove Margherita*/
comanda:mostrar(). /* [] */
