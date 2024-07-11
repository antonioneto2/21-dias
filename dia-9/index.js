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

let aumentoSalario = 0.015

for (let ano = 1; ano <= 1; ano++){
    salarioAtual = salarioAtual + (salarioAtual*aumentoSalario)
    aumentoSalario = aumentoSalario * 2 

    console.log((2024 + ano) + " = R$ " + salarioAtual)
}
