/* os adaptadores 
Cada adaptador traduz quatro coisas: o nome do método (pay vira createCharge ou process), 
a unidade (reais viram centavos), o formato do resultado (status ou código viram boolean) e, 
no legado, o estilo assíncrono (callback vira Promise). Os adaptadores usam composição: 
guardam o adaptado num campo. É o chamado object adapter.*/

import { PaymentProcessor } from './payment-processor';
import { FastPaySdk } from './fast-pay-sdk';
import { LegacyBankGateway } from './legacy-bank-gateway';

export class FastPayAdapter implements PaymentProcessor {
  constructor(private readonly sdk: FastPaySdk) {}

  async pay(amountInReais: number): Promise<boolean> {
    const result = await this.sdk.createCharge({
      amountCents: Math.round(amountInReais * 100),
      currency: 'BRL',
    });
    return result.status === 'succeeded';
  }
}

export class LegacyBankAdapter implements PaymentProcessor {
  constructor(private readonly gateway: LegacyBankGateway) {}

  pay(amountInReais: number): Promise<boolean> {
    return new Promise((resolve) => {
      this.gateway.process(Math.round(amountInReais * 100), (code) => resolve(code === 0));
    });
  }
}
