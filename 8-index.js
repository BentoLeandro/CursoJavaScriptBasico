
const cliente1 = new Cliente;
cliente1.nome = "Maria";
cliente1.cpf = 11122233309;

const contaCorrenteMaria = new ContaCorrente();
contaCorrenteMaria.agencia = 1001;
//contaCorrenteMaria.saldo   = 0;

contaCorrenteMaria.depositar(100);
const valorSacado = contaCorrenteMaria.sacar(50);
console.log(valorSacado);
contaCorrenteMaria.depositar(200);
contaCorrenteMaria.depositar(-1);



console.log(contaCorrenteMaria);
//console.log(cliente1);
//console.log(cliente2);
