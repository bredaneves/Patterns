/* a interface comum 
O objeto real e os proxies implementam a mesma interface. É isso que permite ao cliente não perceber a troca.*/

export interface PizzaCatalog {
  getPrice(pizza: string): Promise<number>;
  setPrice(pizza: string, price: number): Promise<void>;
}
