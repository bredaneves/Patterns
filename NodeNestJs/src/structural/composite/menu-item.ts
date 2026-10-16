/* Passo 2: o componente comum 

Os preços ficam em centavos inteiros, pelo mesmo motivo do PriceBuilder: evitar erros de ponto flutuante.*/

export interface MenuItem {
  readonly name: string;
  getPrice(): number; // em centavos
  print(indent?: number): void;
}

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

export const formatPrice = (cents: number): string => brl.format(cents / 100);

