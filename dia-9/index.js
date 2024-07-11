let nomeUsuario 
let idadeUsuario = 0 
let salarioAtual = 0
let continuar 

do { 

nomeUsuario = prompt("Informe seu nome:")
idadeUsuario = parseInt(prompt("Informe sua idade:"))
salarioAtual = Number(prompt("Informe seu salário atual:"))

continuar = prompt("Os dados estão corretos? (s/n)")

}while(continuar == "n")

console.log("Nome: " + nomeUsuario)
console.log("Idade: " + idadeUsuario + " anos")
console.log("Salário atual: R$ " + salarioAtual)

console.log("Previsão de salário para os próximos 10 anos")

let anoAtual = 2024
let aumentoSalario = 0
let porcSalario = 0.015
aumentoSalario = salarioAtual * porcSalario
salarioAtual = salarioAtual + aumentoSalario

for(let i = anoAtual+1; i <= anoAtual+10; i++ ){
    console.log(i + " - " + salarioAtual)
    porcSalario = porcSalario * 2
    aumentoSalario = salarioAtual * porcSalario
    salarioAtual = salarioAtual + aumentoSalario


}