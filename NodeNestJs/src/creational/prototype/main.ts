
import { Pizza } from './pizza';
import { StuffedCrustPizza } from './stuffed-crust-pizza';
import { PizzaMenu } from './pizza-menu';

const makeBase = () =>
  new Pizza('Margherita', 'medium', ['Mozzarella', 'Basil'], { type: 'Thin Crust', thickness: 3 });

console.log('--- Cópia rasa (o bug) ---');
const base1 = makeBase();
const shallow = base1.shallowClone();
shallow.toppings.push('Olives');
shallow.dough.thickness = 10;
console.log('original:', base1.describe());
console.log('clone   :', shallow.describe());

console.log('--- Cópia profunda ---');
const base2 = makeBase();
const deep = base2.clone();
deep.toppings.push('Olives');
deep.dough.thickness = 10;
console.log('original:', base2.describe());
console.log('clone   :', deep.describe());

console.log('--- Registro de protótipos ---');
const menu = new PizzaMenu();
menu.register('margherita', makeBase());
menu.register(
  'stuffed',
  new StuffedCrustPizza('Stuffed Pepperoni', 'large', ['Pepperoni'], { type: 'Thick Crust', thickness: 12 }, 'Catupiry'),
);

const a = menu.order('stuffed');
a.size = 'small';
const b = menu.order('stuffed');
console.log(a.describe());
console.log(b.describe());
