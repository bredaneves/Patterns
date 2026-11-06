
DEFINE VARIABLE c1     AS CardapioArray NO-UNDO.
DEFINE VARIABLE c2     AS CardapioLista NO-UNDO.
DEFINE VARIABLE garcom AS Garcom        NO-UNDO.

c1 = NEW CardapioArray(5).
c1:adicionar("Margherita").
c1:adicionar("Pepperoni").
c1:adicionar("Calabresa").

c2 = NEW CardapioLista().
c2:adicionar("Frango").
c2:adicionar("Vegetariana").

garcom = NEW Garcom().
garcom:lerCardapio(c1).   /* percorre array */
garcom:lerCardapio(c2).   /* percorre lista - mesmo codigo */        