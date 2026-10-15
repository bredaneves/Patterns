/* os proxies 

Dois pontos:

O LazyCachingProxy recebe uma fábrica (() => PizzaCatalog) e não o objeto pronto. 
Se recebesse o objeto, a conexão já teria acontecido antes de o proxy poder adiar.

Os proxies se empilham, porque todos têm a mesma interface. 
O ProtectionProxy recebe um PizzaCatalog e não sabe (nem precisa saber) que por baixo há um proxy de cache.
*/

import { PizzaCatalog } from './pizza-catalog';

// Proxy virtual + cache: só cria o objeto real no primeiro uso e guarda respostas
export class LazyCachingProxy implements PizzaCatalog {
  private real: PizzaCatalog | undefined;
  private readonly cache = new Map<string, number>();

  constructor(private readonly factory: () => PizzaCatalog) {}

  private getReal(): PizzaCatalog {
    if (!this.real) this.real = this.factory();
    return this.real;
  }

  async getPrice(pizza: string): Promise<number> {
    const cached = this.cache.get(pizza);
    if (cached !== undefined) {
      console.log(`  [cache] ${pizza}`);
      return cached;
    }
    const price = await this.getReal().getPrice(pizza);
    this.cache.set(pizza, price);
    return price;
  }

  async setPrice(pizza: string, price: number): Promise<void> {
    await this.getReal().setPrice(pizza, price);
    this.cache.set(pizza, price);
  }
}

export type Role = 'customer' | 'admin';

// Proxy de proteção: controla quem pode fazer o quê
export class ProtectionProxy implements PizzaCatalog {
  constructor(
    private readonly target: PizzaCatalog,
    private readonly role: Role,
  ) {}

  getPrice(pizza: string): Promise<number> {
    return this.target.getPrice(pizza);
  }

  async setPrice(pizza: string, price: number): Promise<void> {
    if (this.role !== 'admin') {
      throw new Error(`Acesso negado: perfil "${this.role}" não pode alterar preços`);
    }
    await this.target.setPrice(pizza, price);
  }
}
