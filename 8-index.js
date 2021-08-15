import {Cliente} from "./9-Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js"
import {SistemaAutenticacao} from "./Funcionario/SistemaAutenticacao.js"

import {ContaCorrente} from "./Conta/ContaCorrente.js";
import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
import {Conta} from "./Conta/Conta.js";

const gerente = new Gerente("Yasmin", 8000, 987654321);
gerente.cadastrarSenha("321");
const diretor = new Diretor("Maria", 4000, 123456789);
diretor.cadastrarSenha("123");

const cliente1 = new Cliente("Maria", 11122233309,"12345");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "333");
const clienteEstaLogado = SistemaAutenticacao.login(cliente1, "444");
console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);

//const cliente1 = new Cliente;
//cliente1.nome = "Maria";
//cliente1.cpf = 11122233309;


//const cliente2 = new Cliente("Leandro", 99922233309);

const contaCorrenteMaria = new ContaCorrente(cliente1, 1001);
contaCorrenteMaria.depositar(500);
contaCorrenteMaria.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

//const contaCorrenteLeandro = new ContaCorrente(1002, cliente2);

//contaCorrenteMaria.transferir(200, contaCorrenteLeandro);

const novaConta = new Conta(0,cliente1,1001);

console.log(novaConta);
console.log(contaPoupanca);
console.log(contaCorrenteMaria);

