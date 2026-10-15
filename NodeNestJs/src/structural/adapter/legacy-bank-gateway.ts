/* o segundo Adaptee, um gateway legado 
Este usa callback e devolve um código numérico (0 é sucesso, qualquer outro valor é erro).*/

export class LegacyBankGateway {
  process(valueInCents: number, onDone: (code: number) => void): void {
    setTimeout(() => onDone(valueInCents <= 10000 ? 0 : 51), 50);
  }
}
