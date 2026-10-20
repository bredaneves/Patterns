/* Passo 2: a classe base 

Quatro categorias de passo, e o padrão fica mais claro ao distingui-las:
Fixos (private): a base garante que ninguém altere.
Abstratos: obrigatórios, a subclasse precisa implementar.
Com padrão (bake, cut): a subclasse pode sobrescrever.
Hooks (wantsCut, onFinished): pontos de extensão que, por padrão, não fazem nada ou devolvem um valor neutro. 
O wantsCut controla o fluxo, e o onFinished deixa a subclasse reagir ao fim.
*/

export abstract class PizzaRecipe {
  constructor(protected readonly name: string) {}

  // Template Method: fixa a ordem dos passos
  prepare(): void {
    console.log(`\n=== ${this.name} ===`);
    this.kneadDough();
    this.addSauce();
    this.addToppings();
    this.bake();
    if (this.wantsCut()) {
      this.cut();
    }
    this.box();
    this.onFinished();
  }

  // Passos fixos: private, as subclasses não conseguem alterar
  private kneadDough(): void {
    console.log('Sovando a massa');
  }

  private box(): void {
    console.log('Embalando na caixa');
  }

  // Passos obrigatórios: cada sabor precisa implementar
  protected abstract addSauce(): void;
  protected abstract addToppings(): void;

  // Passos com comportamento padrão: a subclasse pode trocar
  protected bake(): void {
    console.log('Assando por 25 minutos a 200°C');
  }

  protected cut(): void {
    console.log('Cortando em fatias diagonais');
  }

  // Hooks: ponto de extensão opcional, com padrão neutro
  protected wantsCut(): boolean {
    return true;
  }

  protected onFinished(): void {}
}
