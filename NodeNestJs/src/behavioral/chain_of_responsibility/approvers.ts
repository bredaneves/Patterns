/* Passo 3: os elos concretos 

Cada classe conhece só a sua alçada. O gerente não sabe que o atendente existe, e o atendente não sabe que 
existe um dono.
*/

import { Approver, DiscountRequest } from './approver';

export class Attendant extends Approver {
  readonly title = 'Atendente';

  protected canApprove(request: DiscountRequest): boolean {
    return request.percent <= 5;
  }
}

export class Manager extends Approver {
  readonly title = 'Gerente';

  protected canApprove(request: DiscountRequest): boolean {
    return request.percent <= 15;
  }
}

export class Owner extends Approver {
  readonly title = 'Dono';

  protected canApprove(request: DiscountRequest): boolean {
    return request.percent <= 30;
  }
}
