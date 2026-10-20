/* Passo 5: o invoker 

O invoker não sabe o que cada comando faz. Ele só chama execute() e undo() e mantém as duas pilhas. 
Repare que o run() esvazia a pilha de refazer: depois de uma ação nova, o “futuro” desfeito deixa de existir, 
como num editor de texto.

O pop() devolve Command | undefined, e o if (!command) é o tratamento que o seu tsconfig exige.
*/

import { Command } from './command';

export class OrderTerminal {
  private history: Command[] = [];
  private redoStack: Command[] = [];

  run(command: Command): void {
    command.execute();
    this.history.push(command);
    this.redoStack = [];
    console.log(`> ${command.description}`);
  }

  undo(): void {
    const command = this.history.pop();
    if (!command) {
      console.log('Nada para desfazer');
      return;
    }
    command.undo();
    this.redoStack.push(command);
    console.log(`< desfeito: ${command.description}`);
  }

  redo(): void {
    const command = this.redoStack.pop();
    if (!command) {
      console.log('Nada para refazer');
      return;
    }
    command.execute();
    this.history.push(command);
    console.log(`> refeito: ${command.description}`);
  }
}
