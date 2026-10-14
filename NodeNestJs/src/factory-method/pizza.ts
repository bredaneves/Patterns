/* Em Java seria a classe abstrata Pizza. Aqui é igual, com abstract class */

export abstract class Pizza {
  constructor(
    public readonly name: string,
    protected readonly dough: string,
    protected readonly sauce: string,
    protected readonly toppings: string[] = [],
  ) {}

  prepare(): void {
    console.log(`Preparing ${this.name} (${this.dough}, ${this.sauce})`);
    this.toppings.forEach((t) => console.log(`  + ${t}`));
  }
  bake(): void { console.log('Baking 25 minutes at 350'); }
  cut(): void { console.log('Cutting into diagonal slices'); }
  box(): void { console.log('Boxing in official store box'); }
}
