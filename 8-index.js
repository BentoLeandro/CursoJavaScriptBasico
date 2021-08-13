import {Cliente} from "./9-Cliente.js"
import {ContaCorrente} from "./10-ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";


//const cliente1 = new Cliente;
//cliente1.nome = "Maria";
//cliente1.cpf = 11122233309;

const cliente1 = new Cliente("Maria", 11122233309);
//const cliente2 = new Cliente("Leandro", 99922233309);


const contaCorrenteMaria = new Conta(0, cliente1, 1001);
contaCorrenteMaria.depositar(500);
contaCorrenteMaria.sacar(100);

const contaPoupanca = new Conta(50, cliente1, 1001);

//const contaCorrenteLeandro = new ContaCorrente(1002, cliente2);

//contaCorrenteMaria.transferir(200, contaCorrenteLeandro);

console.log(contaPoupanca);
console.log(contaCorrenteMaria);
//console.log(contaCorrenteLeandro);
//console.log(ContaCorrente.numeroDeContas);
