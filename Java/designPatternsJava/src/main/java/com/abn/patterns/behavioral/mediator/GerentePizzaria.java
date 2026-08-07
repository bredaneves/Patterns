package com.abn.patterns.behavioral.mediator;

// MEDIATOR CONCRETO — o Gerente coordena o fluxo
public class GerentePizzaria implements Mediator {

    public Atendente  atendente;
    public Cozinha    cozinha;
    public Entregador entregador;
    public Caixa      caixa;

    public void notificar(Setor remetente, String evento) {
        if (evento.startsWith("pedido_registrado")) {
            String pedido = evento.split(":")[1];
            cozinha.prepararPedido(pedido);
        } else if (evento.startsWith("pedido_pronto")) {
            String pedido = evento.split(":")[1];
            entregador.entregar(pedido);
        } else if (evento.startsWith("pedido_entregue")) {
            String pedido = evento.split(":")[1];
            caixa.cobrar(pedido);
        }
    }
}
