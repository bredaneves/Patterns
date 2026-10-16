/* Passo 2: a interface comum */

export interface Pizza {
  getDescription(): string;
  getCost(): number; // em centavos
}

const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

export const formatPrice = (cents: number): string => brl.format(cents / 100);
