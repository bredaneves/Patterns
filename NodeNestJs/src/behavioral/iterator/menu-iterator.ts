/* Passo 2: o contrato 

O Menu tem duas portas de entrada: o createIterator() do GoF e o Iterable nativo, que é o que permite o for...of.
*/

export interface MenuItem {
  name: string;
  priceInCents: number;
  vegetarian: boolean;
}

export interface MenuIterator<T> {
  hasNext(): boolean;
  next(): T;
}

export interface Menu extends Iterable<MenuItem> {
  createIterator(): MenuIterator<MenuItem>;
}
