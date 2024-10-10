let valor
let opcao = parseInt(prompt("Posto de gasolina" 
+ "\n1. Abastecer com gasolina (R$5/L) \n2. Abastecer com álcool (R$3/L) \n3. Calibar os pneus"))


switch(opcao){
    case 1:
       valor = Number(prompt('Digite o valor: '))
       console.log("Você abasteceu " + (valor / 5) + " litros de gasolina")
       break;
    case 2:
        valor = Number(prompt('Digite o valor: '))
        console.log("Você abasteceu " + (valor / 3) + " litros de álcool")
        break;
    default:
        console.log("Pneus calibrados com sucesso!")    
        break;
}