
MESSAGE "=== Margherita ===" VIEW-AS ALERT-BOX INFO.
DEFINE VARIABLE pizzaMargherita AS PizzaMargherita.
ASSIGN pizzaMargherita = NEW PizzaMargherita().
pizzaMargherita:preparar().
/* Massa fina napolitana
   Molho de tomate suave
   Mussarela fresca e manjericao
   Assando por 12 minutos a 280°C
   Pizza pronta! */

MESSAGE "=== Pepperoni ===" VIEW-AS ALERT-BOX INFO.
DEFINE VARIABLE pizzaPepperoni AS PizzaPepperoni.
ASSIGN pizzaPepperoni = NEW PizzaPepperoni().
pizzaPepperoni:preparar().
/* Massa grossa americana
   Molho picante
   Pepperoni e cheddar
   Assando por 12 minutos a 280°C
   Adicionando oregano por cima.
   Pizza pronta! */

