//Exercicios fixação:
//Objetos
//Exercício 1 a 5.
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
}
console.log('A jogadora', player['name'], player.lastName, 'tem', player['age'], 'anos de idade.');

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora', player['name'], player.lastName, 'foi eleita a melhor do mundo por',
player.bestInTheWorld.length, 'vezes.');

console.log('A jogadora possui', player.medals.golden, 'medalhas de ouro e',
player.medals.silver, 'medalhas de prata.');

//For/in e for/of
//Exercício 1 ao 2.
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (const key in names) {
    console.log('Olá', names[key] + ".");
  }

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (const i in car) {
    console.log(i, car[i]);
  }

// Exercícios bloco.
// Parte 1 - Objetos e For/in
// Exercício 1 ao 5.
  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  let infoTwo = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: "Sim",
  };

  console.log("Seja bem vinda", info.personagem + "!");

info.recorrente = "Sim";
  console.log(info);

  for (const key in info) {
    console.log(key);
  }
  for (const key in info) {
    console.log(info[key]);
  }
for (const key in info) {
    if (info[key] === infoTwo[key]) {
        console.log("Ambos recorrentes.")
    } else {
        console.log(info[key], "e", infoTwo[key] + ".");
    }
}

// Exercícios 6 ao 8.
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log("O livro favorito de", leitor.nome, leitor.sobrenome, "se chama", 
  leitor.livrosFavoritos[0]['titulo'] + ".");

  leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  });
  console.log(leitor.livrosFavoritos);

  console.log(leitor.nome, "tem", 
  leitor.livrosFavoritos.length, "livros favoritos.");

// Parte 2 - Funções.
// Exercício 1.
function eUmPalindromo (string) {
    let verify = "";
    for (let index = string.length-1; index >= 0; index--) {
        verify += string[index];
    }
    if (string === verify) {
        return "É um palíndromo!"
    } return "Não é um palíndromo."
}
console.log(eUmPalindromo(""));

// Exercício 2.
function returnMaiorValor (array) {
    let maiorValor = 0;

    for (const key of array) {
        if (key > maiorValor) {
            maiorValor = key;
        }
    }
    return array.indexOf(maiorValor);
}
console.log(returnMaiorValor([2, 3, 6, 7, 10, 1]));

// Exercício 3.
function returnMenorValor(array) {
  let menorValor;

  for (const key of array) {
    if (menorValor === undefined) {
      menorValor = key;
    } else if (menorValor > key) {
      menorValor = key;
    }
  }
  return array.indexOf(menorValor);
}
console.log(returnMenorValor([2, 4, 6, 7, 10, 0, -3]));

  // Exercício 4.
  function biggerName (array) {
    let biggerName = "";

    for (const key of array) {
      if (biggerName.length < key.length) {
        biggerName = key;
      }
    }
    return biggerName;
  }
  console.log(biggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

  // Exercício 5.
  function repeatMoreTimes (array) {
    let contador = 0;
    let maiorContagem = 0;
    let repeatNumber;

    for (let key in array) {
      contador = 0;
     for (let keyTwo in array) {
      if (array[key] === array[keyTwo]) {
        contador += 1;
      }
     }
     if (contador > maiorContagem) {
      maiorContagem = contador;
      repeatNumber = array[key];
     }
    }
    return repeatNumber;
  }
  console.log(repeatMoreTimes([2, 3, 2, 5, 8, 2, 3]));

  // Exercício 6.
function somatorioUmAteN (number) {
  let somatorio = 0;

  for (let index = 0; index <= number; index++) {
    somatorio += index
  }
  return somatorio;
}
console.log(somatorioUmAteN(5));

  // Exercício 7.
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
