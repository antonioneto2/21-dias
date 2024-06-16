let nome = prompt('Digite seu nome: ')
let idade = Number(prompt('Digite sua idade: '))
let carta = prompt('Você tem carteira de motorista? ')
let carro = prompt('Você tem carro?')

if (idade < 18 || carta === "Nao"){
    console.log(nome + ', você não pode dirigir.')
}

else if (idade >= 18 && carta === "Sim" && carro === "Nao"){
    console.log(nome + ', você pode dirigir mas não tem um carro.')
}else{
    console.log(nome + ', você será o motorista!')
}