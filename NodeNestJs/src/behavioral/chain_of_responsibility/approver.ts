/* Passo 2: o elo base da cadeia 

Três pontos:

O setNext devolve o elo recebido (e não this), para permitir montar a cadeia numa linha só: a.setNext(b).setNext(c).
A lógica de repassar fica aqui, uma vez só. Cada subclasse só responde “eu consigo resolver isto?”.
O if (!this.next) é o tratamento do fim da cadeia, e também do | undefined que o seu tsconfig exige. 
Sem ele, uma solicitação que ninguém atende sumiria sem resposta.
*/

export interface DiscountRequest {
  orderId: number;
  percent: number;
}

export type Decision =
  | { approved: true; by: string }
  | { approved: false; reason: string };

export abstract class Approver {
  abstract readonly title: string;
  private next: Approver | undefined;

  setNext(next: Approver): Approver {
    this.next = next;
    return next;
  }

  handle(request: DiscountRequest): Decision {
    if (this.canApprove(request)) {
      console.log(`  ${this.title} aprovou ${request.percent}%`);
      return { approved: true, by: this.title };
    }

    if (!this.next) {
      console.log(`  ${this.title}: sem alçada e sem ninguém depois de mim`);
      return { approved: false, reason: `${request.percent}% excede a alçada de todos` };
    }

    console.log(`  ${this.title}: ${request.percent}% está acima da minha alçada, encaminhando`);
    return this.next.handle(request);
  }

  protected abstract canApprove(request: DiscountRequest): boolean;
}
