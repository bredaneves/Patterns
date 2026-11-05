
DEFINE VARIABLE atendente AS Atendente.
ASSIGN atendente  = new Atendente().

DEFINE VARIABLE supervisor AS Supervisor.
ASSIGN supervisor = new Supervisor().

DEFINE VARIABLE gerente AS Gerente.
ASSIGN gerente = new Gerente().

/* Encadeamento fluente */
atendente:setProximo(supervisor):setProximo(gerente).
        
atendente:aprovar(30).
/* [Atendente] Desconto de R$30.0 aprovado.  */

atendente:aprovar(80).
/* [Atendente] Fora do meu limite. Escalando... 
   [Supervisor] Desconto de R$80.0 aprovado.  */        

atendente:aprovar(200).
/* [Atendente] Fora do meu limite. Escalando...
   [Supervisor] Fora do meu limite. Escalando...
   [Gerente] Desconto de R$200.0 aprovado pelo gerente. */
