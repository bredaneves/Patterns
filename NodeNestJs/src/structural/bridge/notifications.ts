/* Passo 4: a abstração e suas variações
   Este é o coração do padrão. O campo channel é a ponte: as notificações não herdam de nenhum canal, 
   só guardam uma referência à interface MessageChannel. Repare que ReadyNotification e 
   DelayNotification não importam EmailChannel, SmsChannel nem WhatsappChannel.
 */

import { MessageChannel } from './message-channel';

export abstract class OrderNotification {
  constructor(protected readonly channel: MessageChannel) {}

  abstract notify(recipient: string, orderId: number): void;
}

export class ReadyNotification extends OrderNotification {
  notify(recipient: string, orderId: number): void {
    this.channel.send(recipient, `Seu pedido #${orderId} está pronto para retirada.`);
  }
}

export class DelayNotification extends OrderNotification {
  constructor(
    channel: MessageChannel,
    private readonly delayMinutes: number,
  ) {
    super(channel);
  }

  notify(recipient: string, orderId: number): void {
    this.channel.send(
      recipient,
      `ATENÇÃO: o pedido #${orderId} atrasou ${this.delayMinutes} minutos. Pedimos desculpas e vamos aplicar um desconto na próxima compra.`,
    );
  }
}
