/* Passo 4: o composto 

Este é o coração do padrão. O Combo guarda uma lista de MenuItem (a interface, não a classe SimpleItem), 
então cada filho pode ser uma folha ou outro Combo. O getPrice() e o print() pedem o mesmo método a cada filho, 
e a recursão acontece sozinha, sem nenhum if perguntando “você é um grupo ou um item?”.

O add devolve this para permitir encadear chamadas.*/

import { MenuItem, formatPrice } from './menu-item';

export class Combo implements MenuItem {
  private readonly items: MenuItem[] = [];

  constructor(
    public readonly name: string,
    private readonly discountPercent = 0,
  ) {}

  add(item: MenuItem): this {
    this.items.push(item);
    return this;
  }

  remove(item: MenuItem): void {
    const index = this.items.indexOf(item);
    if (index >= 0) this.items.splice(index, 1);
  }

  getPrice(): number {
    const total = this.items.reduce((sum, item) => sum + item.getPrice(), 0);
    return Math.round((total * (100 - this.discountPercent)) / 100);
  }

  print(indent = 0): void {
    const discount = this.discountPercent > 0 ? ` (-${this.discountPercent}%)` : '';
    console.log(`${' '.repeat(indent)}+ ${this.name}${discount}: ${formatPrice(this.getPrice())}`);
    this.items.forEach((item) => item.print(indent + 2));
  }
}
