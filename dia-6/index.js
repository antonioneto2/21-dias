let num = parseInt(prompt('Digite um número inteiro e positivo: '))

for(let i = num; i <= num + 2; i++){
    console.log("tabuada do número:" + i)
    for(let j = 0; j <= 10; j++){
        console.log(i + " X " + j + " = " + (i * j))
    }
}