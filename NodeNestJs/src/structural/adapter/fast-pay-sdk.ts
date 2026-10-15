/* o primeiro Adapter, um SDK moderno 
Finja que este código é de terceiros e não pode ser alterado.
Ele fala em centavos, exige moeda e devolve um objeto com status.*/

export interface ChargeResult {
  id: string;
  status: 'succeeded' | 'failed';
}

export class FastPaySdk {
  async createCharge(params: { amountCents: number; currency: string }): Promise<ChargeResult> {
    const ok = params.amountCents <= 10000;
    return { id: `ch_${Date.now()}`, status: ok ? 'succeeded' : 'failed' };
  }
}
