/* Passo 2: o flyweight 
O Buffer.alloc simula uma imagem de 10 KB. Todos os campos são readonly porque um objeto 
compartilhado não pode ser alterado: quem mexesse nele mexeria no pedido de todo mundo.
*/

export const PHOTO_BYTES = 10_000;

export const RECIPES: Record<string, { toppings: string[]; priceInCents: number }> = {
  Margherita: { toppings: ['Mussarela', 'Manjericão'], priceInCents: 4500 },
  Pepperoni: { toppings: ['Mussarela', 'Pepperoni'], priceInCents: 5500 },
  Veggie: { toppings: ['Cogumelos', 'Pimentão', 'Cebola'], priceInCents: 5000 },
};

export class PizzaType {
  constructor(
    public readonly name: string,
    public readonly toppings: readonly string[],
    public readonly basePriceInCents: number,
    public readonly photo: Buffer, // dado "pesado" que justifica o compartilhamento
  ) {}
}

export function createPizzaType(name: string): PizzaType {
  const recipe = RECIPES[name];
  if (!recipe) throw new Error(`Receita "${name}" não existe`);
  return new PizzaType(name, recipe.toppings, recipe.priceInCents, Buffer.alloc(PHOTO_BYTES));
}
