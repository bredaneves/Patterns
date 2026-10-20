/* Passo 3: a interface do comando 
Todo comando sabe executar e desfazer o que fez.
*/

export interface Command {
  readonly description: string;
  execute(): void;
  undo(): void;
}
