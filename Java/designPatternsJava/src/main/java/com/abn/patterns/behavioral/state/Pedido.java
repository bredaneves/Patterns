package com.abn.patterns.behavioral.state;

// CONTEXTO — o Pedido delega tudo ao estado atual
public class Pedido {

    private EstadoPedido estado = new EstadoRecebido();

    public void setEstado(EstadoPedido estado) {
        this.estado = estado;
    }

    public void avancar()  {
        estado.avancar(this);
    }

    public void cancelar() {
        estado.cancelar(this);
    }

    public String getEstado() {
        return estado.getDescricao();
    }
}
