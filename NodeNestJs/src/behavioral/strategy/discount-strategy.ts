/* Passo 2: a interface da estratégia 

Os valores ficam em centavos inteiros, como nos padrões anteriores.
*/

export interface DiscountStrategy {
  readonly label: string;
  calculate(subtotalInCents: number): number; // devolve o valor do desconto, em centavos
}
