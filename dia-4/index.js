let fome = prompt('Você está com fome?')
let dinheiro = prompt('Você tem dinheiro?')
let restaurante = prompt('O restaurante está aberto?')

if (fome === "Nao" || dinheiro === "Nao"){
    console.log('Hoje a janta será em casa!')
}
else if(fome === "Sim" && dinheiro === "Sim" && restaurante === "Nao" ){
    console.log('Peça um delivery!')
}else{
    console.log('Hoje o jantar será no seu restaurante preferido!')
}