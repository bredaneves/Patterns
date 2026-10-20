/*
A ideia do padrão: guardar uma fotografia do estado de um objeto para poder restaurá-lo depois, 
sem expor os detalhes internos dele. O objeto cria o próprio memento, quem guarda a fotografia (o caretaker) 
só enxerga um pacote fechado, e só o objeto original consegue abrir e ler o conteúdo.

No exemplo, o cliente monta uma pizza personalizada (tamanho, massa e ingredientes), salva versões pelo 
caminho e volta a qualquer uma delas.

O resultado esperado:

Montagens: medium, massa Fina, [Mussarela], depois large, massa Fina, [Mussarela, Pepperoni] e por fim large, 
massa Grossa, [Mussarela, Pepperoni, Abacaxi].
Histórico: Base com mussarela, Grande com pepperoni.
Primeiro undo: volta a large, massa Fina, [Mussarela, Pepperoni]. O abacaxi sumiu, o que prova que a 
foto não foi contaminada pelas mudanças feitas depois dela (a cópia profunda funcionando).
Segundo undo: volta a medium, massa Fina, [Mussarela].
Terceiro undo: Nada para restaurar.
*/

import { PizzaDesigner } from './pizza-designer';
import { DesignHistory } from './design-history';

const designer = new PizzaDesigner();
const history = new DesignHistory(designer);

designer.setDough('Fina');
designer.addTopping('Mussarela');
history.backup('Base com mussarela');
console.log('Montagem 1:', designer.describe());

designer.addTopping('Pepperoni');
designer.setSize('large');
history.backup('Grande com pepperoni');
console.log('Montagem 2:', designer.describe());

designer.addTopping('Abacaxi');
designer.setDough('Grossa');
console.log('Montagem 3:', designer.describe());

console.log('\nHistórico:', history.list());

console.log('\n--- Voltando no tempo ---');
history.undo();
console.log('Estado:', designer.describe());
history.undo();
console.log('Estado:', designer.describe());
history.undo();
