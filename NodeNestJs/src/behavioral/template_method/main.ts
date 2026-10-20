/*
A ideia do padrão: uma classe base define o esqueleto de um algoritmo (a ordem dos passos) e 
deixa algumas etapas para as subclasses preencherem. Quem decide a sequência é a base, 
e as subclasses só mudam o conteúdo de certos passos. Isso é o Princípio de Hollywood: 
“não nos chame, nós chamamos você”. A subclasse não dirige o fluxo, ela é chamada pela base na hora certa.

No exemplo, toda pizza da casa segue a mesma receita (sovar, molho, cobertura, assar, cortar, embalar), 
mas molho e cobertura mudam por sabor, e o calzone não é cortado.  

O resultado esperado:

Margherita: os seis passos na ordem (sovar, molho, cobertura, assar 25 min a 200°C, cortar, embalar), 
tudo com os padrões da base.
Pepperoni: a mesma ordem, mas o forno muda para 20 minutos a 250°C, e depois da embalagem aparece o aviso ao estoque.
Calzone: o passo de corte não aparece, porque o hook wantsCut devolveu false. 
A ordem dos outros passos continua igual.
*/

import { Margherita, Pepperoni, Calzone } from './recipes';

new Margherita().prepare();
new Pepperoni().prepare();
new Calzone().prepare();
