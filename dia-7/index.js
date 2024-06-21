let nota = 0
let media = 0
let condicao = true
let qtdAlunos = 0
let fAcima = 0
let masc = 0
let maiorNota = 0
let sexo 

while(condicao){
    let cad = prompt("Você quer cadastrar uma nota? (s/n)")
    if (cad == "s"){
        qtdAlunos++
        nota = Number(prompt("Digite a nota do aluno"))
        sexo = prompt("Digite o sexo do aluno (f/m)")
        if(sexo == "f" && nota > 7){
            fAcima++
        }
        if(sexo == "m"){
            if(maiorNota < nota){
                maiorNota = nota
            }
            masc++
        }
    }
    else {
        condicao = false
    }

    media += nota
}

media = media / qtdAlunos

console.log("A média geral dos alunos é " + media)
console.log(masc + " homens enviaram as notas")
console.log(fAcima + " mulheres tiveram notas acima de 7")
console.log("A maior nota entre os homens é " + maiorNota)