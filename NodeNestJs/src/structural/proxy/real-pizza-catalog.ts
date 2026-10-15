/* o objeto real 
O construtor imprime uma mensagem para você enxergar quando a conexão acontece.*/

import { PizzaCatalog } from './pizza-catalog';

export class RealPizzaCatalog implements PizzaCatalog {
  private readonly prices = new Map<string, number>([
    ['Margherita', 45],
    ['Pepperoni', 55],
    ['Veggie', 50],
  ]);

  constructor() {
    console.log('RealPizzaCatalog: conectando ao serviço remoto (caro)...');
  }

  async getPrice(pizza: string): Promise<number> {
    console.log(`  [remoto] consultando preço de ${pizza}`);
    await new Promise((resolve) => setTimeout(resolve, 200));
    const price = this.prices.get(pizza);
    if (price === undefined) throw new Error(`Pizza "${pizza}" não existe`);
    return price;
  }

  async setPrice(pizza: string, price: number): Promise<void> {
    console.log(`  [remoto] gravando ${pizza} = ${price}`);
    await new Promise((resolve) => setTimeout(resolve, 200));
    this.prices.set(pizza, price);
  }
}
