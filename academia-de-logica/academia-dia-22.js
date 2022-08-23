// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. 
//Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato:
// Fórmulas: perimetro = (2 * base) + (2 * altura) area = base * altura
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