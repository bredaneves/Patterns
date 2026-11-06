
DEFINE VARIABLE pedido AS Pedido.
ASSIGN pedido = new Pedido().

DEFINE VARIABLE historico AS HistoricoPedido. 
ASSIGN historico = new HistoricoPedido().

pedido:configurar("Margherita", "media", 40.0).
historico:salvar(pedido:salvar()). /* snapshot 1 */
pedido:mostrar(). /* Pedido: Margherita (media) R$40.0 */

pedido:configurar("Pepperoni", "grande", 55.0).
historico:salvar(pedido:salvar()). /* snapshot 2 */
pedido:mostrar(). /* Pedido: Pepperoni (grande) R$55.0 */
        
pedido:configurar("Calabresa", "familia", 70.0).
pedido:mostrar(). /* Pedido: Calabresa (familia) R$70.0 */
        
/* Cliente se arrependeu e desfaz */
pedido:restaurar(historico:desfazer()).
pedido:mostrar(). /* Pedido: Pepperoni (grande) R$55.0 */
        
pedido:restaurar(historico:desfazer()).
pedido:mostrar(). /* Pedido: Margherita (media) R$40.0  */
