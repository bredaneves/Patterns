/* Passo 2: a interface da implementação
É o lado de baixo da ponte: só sabe entregar uma mensagem.
*/

export interface MessageChannel {
  send(recipient: string, text: string): void;
}