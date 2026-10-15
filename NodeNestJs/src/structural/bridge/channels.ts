/* Passo 3: as implementações concretas
   Cada canal tem a sua regra de entrega: o SMS corta o texto, o WhatsApp acrescenta um cabeçalho. 
   Quem pede o envio não precisa saber disso.
*/

import { MessageChannel } from './message-channel';

export class EmailChannel implements MessageChannel {
  send(recipient: string, text: string): void {
    console.log(`[EMAIL -> ${recipient}] ${text}`);
  }
}

export class SmsChannel implements MessageChannel {
  private readonly limit = 60;

  send(recipient: string, text: string): void {
    const body = text.length > this.limit ? `${text.slice(0, this.limit - 3)}...` : text;
    console.log(`[SMS -> ${recipient}] ${body}`);
  }
}

export class WhatsappChannel implements MessageChannel {
  send(recipient: string, text: string): void {
    console.log(`[WHATSAPP -> ${recipient}] *Pizzaria*: ${text}`);
  }
}
