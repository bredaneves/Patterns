/* a interface esperada, o Target */

export interface PaymentProcessor {
  pay(amountInReais: number): Promise<boolean>;
}
