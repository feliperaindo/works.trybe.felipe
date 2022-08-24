//academia-de-logica-dia22-ago
//Desafio proposto no README do link abaixo.
//https://github.com/tryber/academia-de-logica/blob/main/Dia4.3/README.md

//Solução em Grupo.
let number = [12, 37, 42, 7, 120];
let numeroEncontrado = [];
let search = 12;

for (let i = 0; i < number.length; i += 1) {
if(search === number[i]){
numeroEncontrado.push(number[i]);
} 
}
console.table(numeroEncontrado);

let numerosImpares = [];

for (let i = 1   ; i <= 50; i += 1) {
if ((i % 2) == 1){
numerosImpares.push(i);
} 
}
console.table(numerosImpares);

let numerosImpares = [];
let numeroEncontrado = [];

for (let i = 0; i < 155; i += 1) {
if ((numerosImpares[i] % 3) == 0){
numerosImpares.push(i);
} 
}
if (numerosImpares.length > 50) {
console.log('Há 50 ou mais números divisiveis por 3.')
} else {
console.log('Sequência muito pequena.')
}

let numerosMega = [];
let randomNumber = 0;

for (let i = 0; i < 6; i += 1){
randomNumber = (Math.ceil(Math.random() * 60))
for (let ii = 0; ii < numerosMega.length; ii += 1) {
if (randomNumber === numerosMega[ii]) {
randomNumber = 0;
i -= 1;
}
}
if (randomNumber === 0){
!numerosMega.includes(randomNumber);
} else {
numerosMega.push(randomNumber);
}
}
console.log(numerosMega);


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

//Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. 
//Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato:
//Fórmulas: perimetro = (2 * base) + (2 * altura) area = base * altura
function areaAndPerimeter (base, height) {
    let calc = {
    area: base * height,
    perimeter: (2 * base) + (2 * height),
    }
    return calc;
}
console.log(areaAndPerimeter(3, 5));
  
//Exercício 2 - Crie uma função que, dado um array de números inteiros, 
//retorne a quantidade de números pares e ímpares no formato:
function quantityOddANdEvenNumbers (array) {
    let numbers = {
    odds: 0,
    evens: 0,
  }
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] % 2 === 0){
        numbers.evens += 1;
      } else {
        numbers.odds += 1;
      }
    }
    return numbers;
}
console.log(quantityOddANdEvenNumbers([2, 7, 15, 3, 4, 8, 30, 45]))

//Exercício 3 - Crie uma função que receba uma string word e outra string ending.
//Verifique se a string ending é o final da string word. 
//Considere que a string ending sempre será menor que a string word.
//Dica: Use o split.
function receiveStrings (word, ending) {
  let verify = "";
  for (let c in word) {
    for (let i in ending) {
      if (word[c] === ending[i]) {
        verify += ending[i];
      }
    }
  }
  if (verify === ending) {
    return "A menor string corresponde ao final da maior string."
  }
  return "A menor string não corresponde ao final da maior string."
}
console.log(receiveStrings('joaofernando', 'fernan'));
console.log(receiveStrings('trybe', 'be'));
  
  
// valor de teste: ‘trybe’ e ‘be’
// valor esperado no retorno da função: true
//verificaFimPalavra(‘trybe’, ‘be’);  
// Retorno esperado: true  
//verificaFimPalavra(‘joaofernando’, ‘fernan’);  
//  Retorno esperado: false;

// Academia-de-logica (função não operativa)(proposta de correção).
// Resposta = faltou a atribuição dos valores as variáveis 'numberPares' e 'numberImpar'.

function countEvenAndOdd (arrayInteiro) {

  let numberPares = 0;
  let numberImpar = 0;

    for(let index = 0 ; index < arrayInteiro.length ; index+=1) {
      if (arrayInteiro[index] % 2 === 0) {
        numberPares += 1;
      }
      else {
        numberImpar += 1;
      }
    }
    return {
      pares: numberPares,
      ímpares: numberImpar,
    }
}

console.log(countEvenAndOdd([1,2,3,4,5]));
