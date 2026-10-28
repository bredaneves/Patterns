

/* USO — estrutura em árvore*/
DEFINE VARIABLE margherita AS PizzaItem.
ASSIGN margherita = NEW PizzaItem("Margherita", 45.0).

DEFINE VARIABLE refri AS PizzaItem.
ASSIGN refri = NEW PizzaItem("Refrigerante", 8.0).

DEFINE VARIABLE sobremesa AS PizzaItem.
ASSIGN sobremesa = NEW PizzaItem("Tiramisu", 18.0).

DEFINE VARIABLE pepperoni AS PizzaItem.
ASSIGN pepperoni = NEW PizzaItem("Pepperoni", 52.0).

DEFINE VARIABLE comboBasico AS Combo.
ASSIGN comboBasico = NEW Combo("Básico").

comboBasico:adicionar(margherita).
comboBasico:adicionar(refri).

DEFINE VARIABLE comboFamilia AS Combo.
ASSIGN comboFamilia = NEW Combo("Família").

comboFamilia:adicionar(comboBasico).  /* combo dentro de combo!*/
comboFamilia:adicionar(pepperoni).
comboFamilia:adicionar(sobremesa).

comboFamilia:descrever("").
/* [Combo] Família R$123.0
   [Combo] Básico R$53.0
     Margherita R$45.0
     Refrigerante R$8.0
   Pepperoni R$52.0
   Tiramisu R$18.0*/

/* getPreco() funciona igual — não importa a profundidade*/
MESSAGE margherita:getPreco() VIEW-AS ALERT-BOX.   /* 45.0 */
MESSAGE comboFamilia:getPreco() VIEW-AS ALERT-BOX. /* 123.0 */
