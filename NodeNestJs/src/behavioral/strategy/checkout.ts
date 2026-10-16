/* Passo 4: o contexto 

Este é o coração do padrão. O Checkout guarda uma referência à interface e delega o cálculo a ela, 
sem if perguntando “que tipo de desconto é este?”. O setStrategy permite trocar a regra em tempo de execução.*/

import { DiscountStrategy } from './discount-strategy';

export interface CartItem {
  name: string;
  priceInCents: number;
}

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const format = (cents: number): string => brl.format(cents / 100);

export class Checkout {
  private readonly items: CartItem[] = [];

  constructor(private strategy: DiscountStrategy) {}

  add(item: CartItem): this {
    this.items.push(item);
    return this;
  }

  setStrategy(strategy: DiscountStrategy): void {
    this.strategy = strategy;
  }

  subtotal(): number {
    return this.items.reduce((sum, item) => sum + item.priceInCents, 0);
  }

  total(): number {
    return this.subtotal() - this.strategy.calculate(this.subtotal());
  }

  print(): void {
    const discount = this.strategy.calculate(this.subtotal());
    console.log(
      `${this.strategy.label}: subtotal ${format(this.subtotal())}, desconto ${format(discount)}, total ${format(this.total())}`,
    );
  }
}
