/*
Um lembrete de nomenclatura, que já apareceu no início da nossa conversa: 
o Decorator do GoF não é o @decorator do TypeScript (@Controller(), @Injectable()). 
Aqueles são um recurso da linguagem que anexa metadados, parecidos com as annotations do Java. 
O padrão é uma decisão de projeto: embrulhar um objeto em outro com a mesma interface para acrescentar 
comportamento sem alterar a classe original.

A ideia: a pizza tem um preço base e o cliente pode adicionar extras (queijo, pepperoni, recheio na borda) 
em qualquer combinação, inclusive repetida. Com herança, cada combinação viraria uma classe 
(PizzaComQueijoEPepperoni...). Com o Decorator, cada extra é uma camada que se empilha sobre a pizza.

O resultado esperado:

Massa tradicional -> R$ 30,00
Massa tradicional, queijo extra, pepperoni -> R$ 44,00
Massa tradicional, pepperoni, cogumelos, cogumelos -> R$ 48,00
Massa tradicional, borda recheada, queijo extra -> R$ 45,00

Repare na ordem das descrições: o decorador mais interno aparece primeiro, 
porque cada camada acrescenta o seu texto depois do que já havia.
*/

import { Pizza, formatPrice } from './pizza';
import { PlainPizza } from './plain-pizza';
import { ExtraCheese, Pepperoni, Mushroom, StuffedCrust } from './toppings';

const show = (pizza: Pizza) =>
  console.log(`${pizza.getDescription()} -> ${formatPrice(pizza.getCost())}`);

// 1. Sem decoradores
show(new PlainPizza());

// 2. Duas camadas
show(new Pepperoni(new ExtraCheese(new PlainPizza())));

// 3. Camadas repetidas
show(new Mushroom(new Mushroom(new Pepperoni(new PlainPizza()))));

// 4. Montagem em etapas, reatribuindo a variável
let custom: Pizza = new PlainPizza();
custom = new StuffedCrust(custom);
custom = new ExtraCheese(custom);
show(custom);
