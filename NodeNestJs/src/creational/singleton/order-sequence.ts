/* o Singleton clássico 
Compare com o seu Singleton em Java: a estrutura é a mesma (construtor privado, 
campo estático, getInstance()). A diferença é que não existe synchronized nem double-checked locking. 
O Node executa o seu código em uma única thread, então não há duas threads disputando o if. 
O trecho da criação é seguro como está.*/

export class OrderSequence {
  private static instance: OrderSequence | undefined;
  private current = 0;

  private constructor() {
    console.log('OrderSequence criado');
  }

  static getInstance(): OrderSequence {
    if (!OrderSequence.instance) {
      OrderSequence.instance = new OrderSequence();
    }
    return OrderSequence.instance;
  }

  next(): number {
    this.current += 1;
    return this.current;
  }
}
