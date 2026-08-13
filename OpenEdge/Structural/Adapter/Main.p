
DEFINE VARIABLE estoque AS Estoque.
ASSIGN estoque = new Estoque().

estoque:receberIngredientes(new FornecedorLocal(), 10).
/* - Entregando 10.0kg localmente*/
        
estoque:receberIngredientes(
                new FornecedorItalianoAdapter(new FornecedorItaliano()), 10).
/* - Delivering 22.05 lbs from Italy*/
