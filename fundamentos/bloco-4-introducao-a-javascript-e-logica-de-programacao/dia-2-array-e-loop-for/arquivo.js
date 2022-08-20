//Exercício 1.
  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

    for(let i = 0; i < numbers.length; i += 1) {
      console.log(numbers[i]);
    }

//Exercício 2.
  let somaTotal = 0;

    for(let i = 0; i < numbers.length; i += 1) {
      somaTotal += numbers[i];
    }
    console.log(somaTotal);

//Exercício 3.
  let mediaAritimetica = somaTotal/numbers.length
    console.log(mediaAritimetica);

// Exercício 4.

    if (mediaAritimetica > 20) {
      console.log('valor maior que 20');
    } else {
      console.log('valor menor ou igual a 20');
    }

//Exercício 5.
  let maiorNumero = 0;
    
    for(let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] > maiorNumero) {
        maiorNumero = numbers[i];
      }
    }
    console.log(maiorNumero);

//Exercício 6.
  let numerosPares = 0;
  let numerosImpares = 0;
    
    for(let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] % 2 === 1) {
        numerosImpares += 1;
      }
    }
    if (numerosImpares > 0) {
      console.log(numerosImpares);
    } else {
      console.log('Nenhum valor ímpar encontrado');
    }

//Exercício 7.
  let menorNumero = numbers[0];
    
    for(let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] < menorNumero) {
        menorNumero = numbers[i];
      }
    }
    console.log(menorNumero);

//Exercício 8.
  let umAteVinteECinco= [];

    for(let contador = 1; contador <= 25; contador += 1) {
      umAteVinteECinco.push(contador);
    }
    console.log(umAteVinteECinco);

//Exercício 9.
    
    for(let i = 0; i < umAteVinteECinco.length; i += 1) {
      console.log(umAteVinteECinco[i]/2)
    }

//Exercício Bônus 1.

    for (let index = 1; index < numbers.length; index += 1) {
      for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] < numbers[secondIndex]) {
          let position = numbers[index];
          numbers[index] = numbers[secondIndex];
          numbers[secondIndex] = position;
        }
      }
    }
    console.log(numbers);

//Exercício Bõnus 2.

    for (let index = 1; index < numbers.length; index += 1) {
      for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] > numbers[secondIndex]) {
          let position = numbers[index];
          numbers[index] = numbers[secondIndex];
          numbers[secondIndex] = position;
        }
      }
    }
    console.log(numbers);

//Exercício Bônus 3.
  let novoArray = [];

    for(let i = 0; i < numbers.length; i += 1) {
      if (numbers[i + 1] === Number) {
        novoArray.push(numbers[i] * numbers[i + 1]);
      } else {
        novoArray.push(numbers[i] * 2);
      }
      ;
    }
    console.log(novoArray);
