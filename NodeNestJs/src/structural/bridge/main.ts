/*
  Um aviso de nomenclatura, como nos padrões anteriores: no Bridge, “abstração” e “implementação” não 
  significam classe abstrata e implements. A abstração é a camada de alto nível (o que você quer fazer, 
  por exemplo “avisar que o pedido atrasou”), e a implementação é a camada de baixo nível que executa o 
  trabalho (por exemplo “enviar por SMS”). As duas são hierarquias separadas, ligadas por composição.

  A ideia do padrão: quando uma classe varia em duas dimensões ao mesmo tempo, usar herança multiplica as classes. 
  Com 2 tipos de aviso e 3 canais de envio, a herança daria 6 classes (ReadyEmail, ReadySms, ReadyWhatsapp, 
  DelayEmail...), e cada canal novo exigiria uma classe por tipo de aviso. No Bridge, são 2 + 3, 
  e cada lado cresce sozinho.
 */

import { EmailChannel, SmsChannel, WhatsappChannel } from './channels';
import { ReadyNotification, DelayNotification } from './notifications';

const email = new EmailChannel();
const sms = new SmsChannel();
const whatsapp = new WhatsappChannel();

new ReadyNotification(email).notify('ana@exemplo.com', 12);
new ReadyNotification(sms).notify('11 99999-0001', 12);
new ReadyNotification(whatsapp).notify('11 99999-0002', 12);

console.log('---');

new DelayNotification(email, 15).notify('ana@exemplo.com', 13);
new DelayNotification(sms, 15).notify('11 99999-0001', 13);
new DelayNotification(whatsapp, 15).notify('11 99999-0002', 13);