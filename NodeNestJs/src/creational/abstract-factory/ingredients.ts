
/* Em Java seriam interfaces e classes separadas. Aqui dá para agrupar tudo num arquivo */

export interface Dough { readonly name: string; }
export interface Sauce { readonly name: string; }
export interface Cheese { readonly name: string; }

export class ThinCrustDough implements Dough { readonly name = 'Thin Crust Dough'; }
export class ThickCrustDough implements Dough { readonly name = 'Extra Thick Crust Dough'; }

export class MarinaraSauce implements Sauce { readonly name = 'Marinara Sauce'; }
export class PlumTomatoSauce implements Sauce { readonly name = 'Plum Tomato Sauce'; }

export class ReggianoCheese implements Cheese { readonly name = 'Reggiano Cheese'; }
export class MozzarellaCheese implements Cheese { readonly name = 'Shredded Mozzarella'; }
