import { PizzaDirector } from './pizza-director';
import { ConcretePizzaBuilder } from './concrete-pizza-builder';
import { RecipeBuilder } from './recipe-builder';
import { PriceBuilder } from './price-builder';

const director = new PizzaDirector();

// Mesma receita, builder que monta o objeto Pizza
const pizzaBuilder = new ConcretePizzaBuilder();
director.makePepperoni(pizzaBuilder);
console.log(pizzaBuilder.getResult().describe());

console.log('---');

// Mesma receita, builder que gera o texto
const recipeBuilder = new RecipeBuilder();
director.makePepperoni(recipeBuilder);
console.log(recipeBuilder.getResult());

console.log('---');

director.makeVeggie(pizzaBuilder);
console.log(pizzaBuilder.getResult().describe());
director.makeVeggie(recipeBuilder, 'small');
console.log(recipeBuilder.getResult());

console.log('---');

// Sem Director: montagem manual de uma pizza personalizada
pizzaBuilder.setSize('small');
pizzaBuilder.setSauce('Pesto');
pizzaBuilder.addTopping('Chicken');
console.log(pizzaBuilder.getResult().describe());


const priceBuilder = new PriceBuilder();
const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

director.makePepperoni(priceBuilder);
console.log(brl.format(priceBuilder.getResult()));
director.makeVeggie(priceBuilder, 'small');
console.log(brl.format(priceBuilder.getResult()));
