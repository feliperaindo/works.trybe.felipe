const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };

emailListInData.forEach((element) => showEmailList(element));


// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

const result = numbers.find((number) => (number % 3 === 0 && number % 5 === 0));

console.log(result);


// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const nome = ['João', 'Irene', 'Fernando', 'Maria'];

const nameWithFiveLetters = nome.find((n) => (n.length === 5));

console.log(nameWithFiveLetters);

// Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
const musicWithNumber = musicas.find((m) => (m.id === '31031685'));

// Escreva uma função que recebe dois parâmetros: o primeiro um array de nomes e o segundo, um nome qualquer. Essa função deve retornar true se o segundo parâmetro - um nome qualquer - estiver contido no primeiro parâmetro - array de nomes. Caso não esteja contido, deve retornar false.
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((test) => test === name);
};

console.log(hasName(names, 'Ana'));

// Escreva uma função, que dado um array de pessoas e uma idade mínima, retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false. Use every;
// const people = [
//   { name: 'Mateus', age: 16 },
//   { name: 'José', age: 18 },
//   { name: 'Ana', age: 23 },
//   { name: 'Cláudia', age: 20 },
//   { name: 'Bruna', age: 19 },
// ];

// const verifyAges = (arr, minimumAge) => {
//   const check = arr.every((test) => test.age > 18);
//   return check;
// };

console.log(verifyAges(people, 18));


// Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// const ordem = people.sort((a, b) => a.age - b.age);

// console.log(people);

// Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.

const ordem2 = people.sort((a, b) => {
  if (b.name > a.name) {
    return 1;
  }
  if (b.name < a.name) {
    return -1;
  }
  return 0;
});

console.log(ordem2);