console.log("Trabalhando com Loops...");

const idadeComprador = 17;
const estaAcompanhada = true;
let passagemComprada  = false;
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

console.log("Destinos possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada;
const destino = "Rio de Janeiro"

let contador = 0;
let destinoExiste = false;
while(contador < 3){
    if (destino == listaDeDestinos[contador]){
        //console.log(listaDeDestinos[contador]);
        destinoExiste = true;
        break;
    }    
    contador += 1;
}

if (podeComprar && destinoExiste){
    console.log("Boa viagem..");
}else{
    console.log("Desculpe tivemos um erro...");
}

for (let i=0; i<3; i++){
    if (destino == listaDeDestinos[i]){
        destinoExiste = true;
        break;
    }
}