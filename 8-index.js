import {Cliente} from "./9-Cliente.js"
import {ContaCorrente} from "./10-ContaCorrente.js"


const cliente1 = new Cliente;
cliente1.nome = "Maria";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente;
cliente2.nome = "Leandro";
cliente2.cpf = 99922233309;

const contaCorrenteMaria = new ContaCorrente();
contaCorrenteMaria.agencia = 1001;
contaCorrenteMaria.cliente = cliente1;
contaCorrenteMaria.depositar(500);

const contaCorrenteLeandro = new ContaCorrente();
contaCorrenteLeandro.agencia = 102;
contaCorrenteLeandro.cliente = cliente2;

contaCorrenteMaria.transferir(200, contaCorrenteLeandro);





console.log(contaCorrenteMaria);
console.log(contaCorrenteLeandro);
//console.log(cliente1);
//console.log(cliente2);
