/* USO — combinações livres em tempo de execução */

DEFINE VARIABLE margherita1 as Margherita.
ASSIGN margherita1 = new Margherita(new Balcao()).
margherita1:preparar(INPUT "").  /* [Balcão] Entregando: Margherita*/

DEFINE VARIABLE margherita2 as Margherita.
ASSIGN margherita2 = new Margherita(new Delivery()).
margherita2:preparar(INPUT ""). /* [Delivery] Saindo para entrega: Margherita */

DEFINE VARIABLE pepperoni1 as Pepperoni.
ASSIGN pepperoni1 = new Pepperoni(new App()).
pepperoni1:preparar(INPUT "").      /* [App] Notificando cliente: Pepperoni */
