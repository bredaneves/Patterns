
/* USO */
DEFINE VARIABLE caixa AS Caixa NO-UNDO.
ASSIGN caixa = NEW Caixa().

caixa:setFormaPagamento(new PagamentoPix()).
caixa:finalizarPedido(50.0). /* Pago via Pix: R$47.5 (com desconto) */

caixa:setFormaPagamento(new PagamentoCartao()).
caixa:finalizarPedido(50.0). /* Pago no cartão: R$51.5 (com taxa) */
