/* Passo 3: as estratégias concretas 
O NoDiscount chama atenção por não declarar parâmetro nenhum, e mesmo assim implementa a interface. 
O TypeScript aceita, porque um método que ignora argumentos é compatível com um contrato que os oferece. 
Ele também elimina um if (strategy) no checkout: “sem desconto” é uma estratégia como as outras 
(o chamado Null Object).
*/

import { DiscountStrategy } from './discount-strategy';

export class NoDiscount implements DiscountStrategy {
  readonly label = 'Sem desconto';

  calculate(): number {
    return 0;
  }
}

export class PercentageDiscount implements DiscountStrategy {
  readonly label: string;

  constructor(private readonly percent: number) {
    this.label = `${percent}% de desconto`;
  }

  calculate(subtotalInCents: number): number {
    return Math.round((subtotalInCents * this.percent) / 100);
  }
}

export class FixedAmountDiscount implements DiscountStrategy {
  readonly label: string;

  constructor(
    private readonly amountInCents: number,
    private readonly minimumInCents: number,
  ) {
    this.label = `${amountInCents / 100} reais off (mínimo ${minimumInCents / 100})`;
  }

  calculate(subtotalInCents: number): number {
    if (subtotalInCents < this.minimumInCents) return 0;
    return Math.min(this.amountInCents, subtotalInCents);
  }
}
