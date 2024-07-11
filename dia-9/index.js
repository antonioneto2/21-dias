let nomeUsuario = prompt("Informe seu nome: ")
let idadeUsuario = parseInt(prompt("Informe sua idade: "))
let pesoUsuario = parseInt(prompt("Informe seu peso: "))
let alturaUsuario = Number(prompt("Informe sua altura: "))
let profUsuario = prompt("Informe sua profissão: ")


do {
console.log("Olá " + nomeUsuario + ", você tem " + idadeUsuario + " anos, é "+ profUsuario + ", tem " + alturaUsuario + "M de altura e pesa " + pesoUsuario + "kg.")

if(idadeUsuario >= 18){
    console.log("Está liberado para tomar umas geladas.")
}else{
    console.log("Sem gelada pra você.")
}

let imc = 0

imc = pesoUsuario / (alturaUsuario*alturaUsuario)

if (imc < 18.5){
    console.log("Você está muito magro.")
}else if(imc >= 18.5 && imc <= 24.9){
    console.log("Você está no peso ideal.")
}else if(imc >= 24.9 && imc <= 30){
    console.log("Você está com sobrepeso.")
}else if (imc > 30){
    console.log("Você está com obsidade")
}
let anoUsuario = 2024
anoUsuario -=idadeUsuario

console.log("Você nasceu em " + anoUsuario)

let idadeAtual = 0

for (let index = anoUsuario; index < 2025 ; index++) {
    console.log(index + " - " + idadeAtual + " anos de idade")
    idadeAtual++
       
}

let continuar = prompt("Deseja inserir os dados novamente? (s/n)")

} while (continuar == "s");


