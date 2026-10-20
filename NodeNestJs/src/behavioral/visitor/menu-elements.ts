/* Passo 2: os elementos e o contrato do visitor 

Três pontos:
O visitor é genérico no tipo de retorno (MenuVisitor<R>): um devolve number, outro string, outro string[]. 
No Java isso costuma exigir um campo para guardar o resultado ou um segundo tipo genérico, 
e aqui o accept<R> repassa o tipo direto.
A interface do visitor e as classes ficam no mesmo arquivo porque se citam mutuamente 
(a interface fala de Pizza, e Pizza fala da interface). Separar criaria imports circulares, 
pelo mesmo motivo dos estados no State.
Cada accept tem uma linha e é igual em todos os elementos, exceto pelo nome do método chamado. 
É o único código que os elementos precisam saber sobre operações.
*/

export type Size = 'small' | 'medium' | 'large';

export interface MenuVisitor<R> {
  visitPizza(pizza: Pizza): R;
  visitDrink(drink: Drink): R;
  visitDessert(dessert: Dessert): R;
}

export interface MenuElement {
  readonly name: string;
  accept<R>(visitor: MenuVisitor<R>): R;
}

export class Pizza implements MenuElement {
  constructor(
    public readonly name: string,
    public readonly size: Size,
    public readonly toppings: readonly string[],
    public readonly basePriceInCents: number,
  ) {}

  accept<R>(visitor: MenuVisitor<R>): R {
    return visitor.visitPizza(this);
  }
}

export class Drink implements MenuElement {
  constructor(
    public readonly name: string,
    public readonly volumeMl: number,
    public readonly priceInCents: number,
  ) {}

  accept<R>(visitor: MenuVisitor<R>): R {
    return visitor.visitDrink(this);
  }
}

export class Dessert implements MenuElement {
  constructor(
    public readonly name: string,
    public readonly priceInCents: number,
    public readonly containsNuts: boolean,
  ) {}

  accept<R>(visitor: MenuVisitor<R>): R {
    return visitor.visitDessert(this);
  }
}
