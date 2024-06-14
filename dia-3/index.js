let nomeDoUsuario = prompt("Digite seu nome!");
let idadeDoUsuario = Number(prompt("Digite sua idade!"));
let alturaDoUsuario = Number(prompt("Digite sua altura!"));
let pesoDoUsuario = Number(prompt("Digite seu peso!"));

let idade = 2024 - idadeDoUsuario;
let imc = pesoDoUsuario / (alturaDoUsuario * alturaDoUsuario);

console.log("Olá",nomeDoUsuario,",você tem",idadeDoUsuario, "anos, nasceu em",idade, "tem",alturaDoUsuario,"de altura ,pesa",pesoDoUsuario,"kg seu IMC é", imc,"Kg/m2" );