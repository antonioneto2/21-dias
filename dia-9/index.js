let nomeUsuario = prompt("Imforme seu nome: ")
let idadeUsuario = parseInt(prompt("Informe sua idade: "))
let pesoUsuario = parseInt(prompt("Informe seu peso: "))
let alturaUsuario = Number(prompt("Informe sua altura: "))
let profUsuario = prompt("Informe sua profissão: ")

console.log("Olá " + nomeUsuario + ", você tem " + idadeUsuario + " anos, é "+ profUsuario + ", tem " + alturaUsuario + "M de altura e pesa " + pesoUsuario + "kg.")

if(idadeUsuario >= 18){
    console.log("Está liberado para tomar umas geladas.")
}else{
    console.log("Sem gelada pra você.")
}