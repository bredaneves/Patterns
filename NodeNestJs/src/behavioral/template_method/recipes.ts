/* Passo 3: as subclasses 

Nenhuma subclasse chama kneadDough() nem box(), e nenhuma decide a ordem. Elas só preenchem as lacunas. 
O override é obrigatório nos passos que a base já implementava (bake, wantsCut, onFinished) se o seu tsconfig 
tiver noImplicitOverride ligado, e é boa prática de qualquer forma, porque o compilador avisa se o nome do 
método na base mudar. Nos passos abstratos ele não é exigido.
*/

import { PizzaRecipe } from './pizza-recipe';

export class Margherita extends PizzaRecipe {
  constructor() {
    super('Margherita');
  }

  protected addSauce(): void {
    console.log('Espalhando molho de tomate');
  }

  protected addToppings(): void {
    console.log('Colocando mussarela e manjericão');
  }
}

export class Pepperoni extends PizzaRecipe {
  constructor() {
    super('Pepperoni');
  }

  protected addSauce(): void {
    console.log('Espalhando molho de tomate picante');
  }

  protected addToppings(): void {
    console.log('Colocando mussarela e pepperoni');
  }

  protected override bake(): void {
    console.log('Assando por 20 minutos a 250°C (forno de pedra)');
  }

  protected override onFinished(): void {
    console.log('Aviso ao estoque: dar baixa em pepperoni');
  }
}

export class Calzone extends PizzaRecipe {
  constructor() {
    super('Calzone');
  }

  protected addSauce(): void {
    console.log('Espalhando pouco molho (para não vazar)');
  }

  protected addToppings(): void {
    console.log('Colocando presunto e mussarela, e fechando a massa ao meio');
  }

  protected override wantsCut(): boolean {
    return false;
  }
}
