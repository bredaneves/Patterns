/* Passo 3: o caretaker 

O caretaker guarda e devolve snapshots, mas nunca olha dentro deles. Ele não sabe que existe tamanho, 
massa ou ingredientes.
*/

import { PizzaDesigner, Snapshot } from './pizza-designer';

export class DesignHistory {
  private readonly stack: Snapshot[] = [];

  constructor(private readonly designer: PizzaDesigner) {}

  backup(label: string): void {
    this.stack.push(this.designer.save(label));
  }

  undo(): void {
    const snapshot = this.stack.pop();
    if (!snapshot) {
      console.log('Nada para restaurar');
      return;
    }
    this.designer.restore(snapshot);
    console.log(`< restaurado: ${snapshot.label}`);
  }

  list(): string {
    return this.stack.map((s) => s.label).join(', ');
  }
}
