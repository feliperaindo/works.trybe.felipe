// // //Exercício 1.
// let result = 1;

//     for (let index = 10; index >= 1; index -= 1) {
//         result *= index;
//     }

// // //Exercício 2.
// let word = "socorram-me subi no onibus em marrocos";
// let invert = "";

//     for (let i = word.length - 1; i >= 0; i -= 1) {
//         invert += word[i];
//     }
//     console.log(invert);

// // //Exercício 3.
// // //Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. 
// // //Considere o número de caracteres de cada palavra.
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let biggerWord = "";
// let smarllerWord = "";

//     for (let ii = 0; ii < array.length; ii += 1) {
//         if (array[ii].length > biggerWord.length) {
//                 biggerWord = array[ii];
//         }
//         if (smarllerWord === "") {
//             smarllerWord = array[ii];
//         } else if (array[ii].length < smarllerWord.length) {
//         smarllerWord = array[ii];
//         }
//     }
//     console.log(biggerWord);
//     console.log(smarllerWord);

// //Exercício 4. (modo mais simples - brutal force)
// let numerosPrimos = [];
// let divisores = 0;

//     for (let contador = 1; contador <= 150; contador += 1) {
//         divisores = 0;
//         for (let contadorDois = 0; contadorDois < contador; contadorDois += 1) {
//             if (contador % contadorDois === 0) {
//                 divisores += 1;
//             }
//         }
//         if (divisores === 1) {
//             numerosPrimos.push(contador)
//         }
//     }
//     console.log(numerosPrimos);

// //Exercício 4. (modo matemático)
// let primos = [];
// let deviders = 0;

//     for (let c = 1; c <= 150; c += 1) {
//         deviders = 0;
//         if (c <= 2) {
//             for (let index = 1; index < c; index += 1) {
//                 if (c % index === 0) {
//                     deviders += 1;
//                 }
//                 if (deviders === 1) {
//                     primos.push(c);
//                 }
//             }
//         } else {
//             for (let contable = 0; contable < primos.length; contable += 1) {
//                 if (c % primos[contable] === 0) {
//                         deviders += 1;                    
//                 }
//             }
//             if (deviders === 0) {
//                 primos.push(c);
//             }  
//         }
//     }
//     console.log(primos);

//Exercícios bônus 1.
let asterisco = ""

    // for (let index = 0; index < 5; index++) {
    //     asterisco = "";
    //     for (let indexTwo = 0; indexTwo < 5; indexTwo++) {
    //         asterisco += "*";     
    //     }
    //     console.log(asterisco);
    // }
    
//Exercícios bônus 2.

// for (let index = 1; index <= 5; index += 1) {
//     asterisco = "";
//     for (let indexTwo = 0; indexTwo < index; indexTwo += 1) {
//         asterisco += "*";     
//     }
//     console.log(asterisco);
// }

//Exercícios bônus 3.

// for (let index = 0; index < 5; index += 1) {
//     asterisco = "";
//     for (let indexTwo = 0; indexTwo < 5; indexTwo += 1) {
//         if (index + indexTwo >= 4) {
//             asterisco += "*";
//         } else {
//             asterisco += " "; 
//         }  
//     }
//     console.log(asterisco);
// }

//Exercício bônus 4.

// for (let index = 0; index < 5; index += 1) {
//     asterisco = "";
//     for (let indexTwo = 0; indexTwo <= index; indexTwo += 1) {
//         if (index + indexTwo >= 4) {
//             asterisco += "*";
//         } else {
//             asterisco += " "; 
//         }  
//     }
//     console.log(asterisco);
// }

//Exercício bônus 5. (não consegui fazer.)

    for (let index = 0; index < 5; index -= 1) {
        asterisco = "";
        for (let indexTwo = 0; indexTwo < 7; indexTwo += index) {
            asterisco += "*";     
        }
        console.log(asterisco);
    }