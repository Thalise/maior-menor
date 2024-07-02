// // function soma(num1, num2){
// //     let res  = num1 + num2;
// //     console.log("a soma é igual a" + res);
// // }

// // soma (10, 20);
// // soma (2, 8);

// const prompt = require("prompt-sync")({sigint:true});
// function maiorNumeroPossivel(num){
//     return parseInt(
//         num
//         .split("")
//         .sort((a, b) => b - a)
//         .join(""),
//         10
//     );
// }

// const numero = prompt ("Por favor, forneça um número:");
// const resultado = maiorNumeroPossivel(numero);
// console.log("O maior número possível com os algoritmos fornecidos são:" + resultado);


const prompt = require("prompt-sync")();
const numero = prompt("Digite um número:")
function maiorNumero(num) {
    let array = num.split("")
   
    for (let i= 0; i < array.length; i++) {
     for (let j = i +1; j < array.length; j++) {
        
   if(array[i] <array [j]){
    let aux = array [j];
    array [j] = array [i]
    array [i] = aux

   }
     }
        
    }

    return array.join("")
}
