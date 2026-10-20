/* Passo 3: os visitors 

Cada visitor concentra uma operação inteira: para saber como o preço é calculado, você lê uma classe, 
e não procura um calculatePrice() espalhado por três. O Record<Size, number> não gera | undefined, 
porque as chaves são uma união fechada de literais (o noUncheckedIndexedAccess só afeta índices abertos, como string).
*/

import { Dessert, Drink, MenuVisitor, Pizza, Size } from './menu-elements';

const SIZE_PERCENT: Record<Size, number> = { small: 80, medium: 100, large: 130 };
const TOPPING_PRICE_IN_CENTS = 300;

export class TotalPriceVisitor implements MenuVisitor<number> {
  visitPizza(pizza: Pizza): number {
    const base = Math.round((pizza.basePriceInCents * SIZE_PERCENT[pizza.size]) / 100);
    return base + pizza.toppings.length * TOPPING_PRICE_IN_CENTS;
  }

  visitDrink(drink: Drink): number {
    return drink.priceInCents;
  }

  visitDessert(dessert: Dessert): number {
    return dessert.priceInCents;
  }
}

export class KitchenTicketVisitor implements MenuVisitor<string> {
  visitPizza(pizza: Pizza): string {
    return `PIZZA ${pizza.size} ${pizza.name}: ${pizza.toppings.join(', ')}`;
  }

  visitDrink(drink: Drink): string {
    return `BEBIDA ${drink.name} ${drink.volumeMl}ml`;
  }

  visitDessert(dessert: Dessert): string {
    const warning = dessert.containsNuts ? ' (ATENÇÃO: contém nozes)' : '';
    return `SOBREMESA ${dessert.name}${warning}`;
  }
}
