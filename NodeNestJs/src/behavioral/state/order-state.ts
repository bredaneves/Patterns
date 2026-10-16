/* Passo 2: as interfaces 
O estado recebe o contexto por uma interface mínima (OrderContext), que só permite trocar de estado. 
Assim os estados não importam a classe Order, o que evita um import circular entre os arquivos.*/

export interface OrderContext {
  setState(state: OrderState): void;
}

export interface OrderState {
  readonly name: string;
  next(order: OrderContext): void;
  cancel(order: OrderContext): void;
}
