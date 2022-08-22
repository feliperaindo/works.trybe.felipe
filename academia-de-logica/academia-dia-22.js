//Desafio proposto no README do link abaixo.
//https://github.com/tryber/academia-de-logica/blob/main/Dia4.3/README.md

//Solução em Grupo.
// let number = [12, 37, 42, 7, 120];
// let numeroEncontrado = [];
// let search = 12;
// ​
// for (let i = 0; i < number.length; i += 1) {
//     if(search === number[i]){
//         numeroEncontrado.push(number[i]);
//     } 
// }
// console.table(numeroEncontrado);
// ​
// let numerosImpares = [];
// ​
// for (let i = 1   ; i <= 50; i += 1) {
//     if ((i % 2) == 1){
//         numerosImpares.push(i);
//     } 
// }
// console.table(numerosImpares);
// ​
// let numerosImpares = [];
// let numeroEncontrado = [];
// ​
// ​
// for (let i = 0; i < 155; i += 1) {
//     if ((numerosImpares[i] % 3) == 0){
//          numerosImpares.push(i);
//     } 
//  }
// if (numerosImpares.length > 50) {
//     console.log('Há 50 ou mais números divisiveis por 3.')
// } else {
//     console.log('Sequência muito pequena.')
// }

// let numerosMega = [];
// let randomNumber = 0;

//     for (let i = 0; i < 6; i += 1){
//         randomNumber = (Math.ceil(Math.random() * 60))
//         for (let ii = 0; ii < numerosMega.length; ii += 1) {
//             if (randomNumber === numerosMega[ii]) {
//                 randomNumber = 0;
//                 i -= 1;
//             }
//         }
//         if (randomNumber === 0){
//             !numerosMega.includes(randomNumber);
//         } else {
//             numerosMega.push(randomNumber);
//         }
//     }
//     console.log(numerosMega);


//Minha Solução.

// Exercício 1.
let conjuntoDeNumeros = [12, 37, 42, 7, 120];
let numeroProcurado = 30;
let resultado;

    for (let i = 0; i < conjuntoDeNumeros.length; i += 1) {
        if(numeroProcurado === conjuntoDeNumeros[i]) {
            resultado = (conjuntoDeNumeros.indexOf(numeroProcurado));
        }
    }
    if (resultado !== undefined) {
        console.log(resultado);
    } else {
        console.log("Elemento não encontrado no array");
    }

//Exercício 2.
let impares;

    for (let ii = 1; ii <= 50; ii += 1) {
        if ((ii % 2) === 1) {
            if (impares === undefined) {
                impares = ii;
            } else {
                impares = impares + ", " + ii;
            }
        } 
    }
    console.log(impares);

//Exercício 3.

let quantidadeAleatoria = Math.ceil(Math.random() * 10000);
let contadorDivisiveisPorTres = 0;

    for (let index = 0; index <= quantidadeAleatoria; index += 1) {
        if (index % 3 === 0) {
            contadorDivisiveisPorTres += 1;
        }
    }
    if (contadorDivisiveisPorTres > 50) {
        console.log("Há 50 ou mais números diviseis por 3");
    } else {
        console.log("Sequência muito pequena.");
    }
    console.log(quantidadeAleatoria);
