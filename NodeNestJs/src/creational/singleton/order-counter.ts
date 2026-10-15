/* a versão idiomática em TypeScript 
Aqui a classe não é exportada, só a instância. Funciona porque o Node executa cada módulo 
uma vez e guarda o resultado em cache: todo import { orderCounter } recebe o mesmo objeto. 
Na prática, esta é a forma mais comum de Singleton em projetos TypeScript, 
sem getInstance() e sem construtor privado.*/

class OrderCounter {
  private current = 0;

  next(): number {
    this.current += 1;
    return this.current;
  }
}

export const orderCounter = new OrderCounter();
