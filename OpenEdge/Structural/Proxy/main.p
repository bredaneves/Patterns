

/* USO — o sistema nao sabe se estA falando com real ou proxy*/
DEFINE VARIABLE fornecedor AS FornecedorPremiumProxy.
ASSIGN fornecedor = new FornecedorPremiumProxy().

fornecedor:consultarCardapio().
/* [PROXY] Cache vazio, consultando real...*/
/* [REAL] Consultando fornecedor italiano... (custoso!)*/

fornecedor:consultarCardapio().
/* [PROXY] Retornando do cache  ← sem custo*/

fornecedor:consultarCardapio().
/* [PROXY] Retornando do cache  ← sem custo */
