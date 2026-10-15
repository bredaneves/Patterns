/* o subsistema 
São as classes que já existem e que o Facade vai coordenar. Cada uma faz uma coisa só
*/

export class PaymentService {
  charge(amount: number): boolean {
    const approved = amount <= 100;
    console.log(`Cobrando R$ ${amount}: ${approved ? 'aprovado' : 'recusado'}`);
    return approved;
  }
}

export class DoughMaker {
  prepare(type: string): void { console.log(`Preparando massa ${type}`); }
}

export class ToppingsStation {
  add(items: string[]): void { console.log(`Adicionando: ${items.join(', ')}`); }
}

export class Oven {
  preheat(temperature: number): void { console.log(`Pré-aquecendo forno a ${temperature}°`); }
  bake(minutes: number): void { console.log(`Assando por ${minutes} minutos`); }
  turnOff(): void { console.log('Desligando forno'); }
}

export class Packager {
  cut(): void { console.log('Cortando em fatias'); }
  box(): void { console.log('Colocando na caixa'); }
}

export class DeliveryService {
  private sequence = 0;

  schedule(address: string): string {
    this.sequence += 1;
    const code = `TRK-${String(this.sequence).padStart(4, '0')}`;
    console.log(`Entrega agendada para "${address}" (${code})`);
    return code;
  }
}
