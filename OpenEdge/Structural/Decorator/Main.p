
DEFINE VARIABLE p AS Pizza NO-UNDO.
ASSIGN p = NEW PizzaMargherita().
MESSAGE p:getDescricao() + " R$" + STRING(p:getPreco()) VIEW-AS ALERT-BOX.
/* Margherita R$40.0 */

ASSIGN p = NEW BordaRecheada(p).
ASSIGN p = NEW QueijoDuplo(p).
ASSIGN p = NEW MolhoEspecial(p).
MESSAGE p:getDescricao() + " R$" + STRING(p:getPreco()) VIEW-AS ALERT-BOX.
/* Margherita, borda recheada, queijo duplo, molho especial R$59.0 */

/* Outra combinação — sem nenhuma classe nova */
DEFINE VARIABLE p2 AS Pizza NO-UNDO.
ASSIGN p2 = NEW QueijoDuplo(NEW QueijoDuplo(NEW PizzaMargherita())).
MESSAGE p2:getDescricao() + " R$" + STRING(p2:getPreco()) VIEW-AS ALERT-BOX.  
/* Margherita, queijo duplo, queijo duplo R$52.0  ← pode empilhar o mesmo! */
