import {Cliente} from "./9-Cliente.js"
import {ContaCorrente} from "./10-ContaCorrente.js"


//const cliente1 = new Cliente;
//cliente1.nome = "Maria";
//cliente1.cpf = 11122233309;

const cliente1 = new Cliente("Maria", 11122233309);
const cliente2 = new Cliente("Leandro", 99922233309);


const contaCorrenteMaria = new ContaCorrente(1001, cliente1);
contaCorrenteMaria.depositar(500);

const contaCorrenteLeandro = new ContaCorrente(1002, cliente2);

contaCorrenteMaria.transferir(200, contaCorrenteLeandro);





console.log(contaCorrenteMaria);
console.log(contaCorrenteLeandro);
console.log(ContaCorrente.numeroDeContas);
//console.log(cliente1);
//console.log(cliente2);
