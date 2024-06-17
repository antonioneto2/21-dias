let num = parseInt(prompt('Digite um número inteiro e positivo: '))
let seg = num + 1
let ter = num + 2

console.log("Número " + num + ":")
for(let i = 0; i <=10; i++){
    console.log(num + " x " + i + " = " + (num*i))
}

console.log("Número " + seg + ":")
for(let i = 0; i<=10; i++){
    console.log(seg + " x " + i + " = " + (seg*i))
}

console.log("Número " + ter + ":")
for(let i = 0; i<=10; i++){ 
    console.log(ter + " x " + i + " = " + (ter*i))
}