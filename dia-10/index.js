let array = [];
let arrayInvertido = [];
let qtd;

qtd = parseInt(prompt("Quantos numeros deseja inserir?"));

for(let i = 0; i < qtd; i++){
    array[i]= parseInt(prompt("digite " + qtd + " números"));
}

console.log(array);

let contador = qtd - 1;

for (let i = 0; i < qtd; i++){
    arrayInvertido[i] = array[contador];
    contador--;
}

console.log(arrayInvertido);
