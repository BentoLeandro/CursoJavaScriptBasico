console.log("Trabalhando com Condicionais...");

const idadeComprador = 17;
const estaAcompanhada = true;
const passagemComprada = true;
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

console.log("Destinos possíveis");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada) {
    if (idadeComprador >= 18)
        console.log("Comprador maior de Idade...");
    
    if (estaAcompanhada)    
        console.log("A pessoa está acompanhada de um Maior de Idade.. Pode comprar");
    
    listaDeDestinos.splice(1,1);
}else{
    console.log("Não é maior de Idade e não posso Vender...");
}    

console.log("Embarque... \n\n");
if (idadeComprador >= 18 && passagemComprada){
    console.log("Boa Viagem...");
}else{
    console.log("Você não pode embarcar...")
}

console.log(listaDeDestinos);