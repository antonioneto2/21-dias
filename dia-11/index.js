let alunos = []
let notas = []
let continuar = true 
let contador = 0

while (continuar) {
    let nome = prompt("Digite seu nome " + (contador + 1) + "º aluno")
    let nota = parseInt(prompt("Digite a nota do aluno"))
    alunos[contador] = nome
    notas[contador] = nota
    contador++
    let resposta = prompt("Deseja inserir informções de outro aluno? (s/n)")
    if (resposta == "n")
        continuar = false
}

console.log("Nota dos alunos: ")
for (let i = 0; i < alunos .length; i++){
    console.log(alunos[i] + " - " + notas[i])
}

let somaNotas = 0
for(let i = 0; i < notas.length; i++){
    somaNotas += notas[i]
}

let media = somaNotas / alunos.length
console.log("A soma das notas foi: " + somaNotas)
console.log("A média geral da turma foi: " + media)