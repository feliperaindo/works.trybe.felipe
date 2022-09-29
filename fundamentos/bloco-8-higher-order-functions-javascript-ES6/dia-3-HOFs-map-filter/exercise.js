const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  

//Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// const newArray = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
// console.log(newArray);

// Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha, considerando suas idades quando o livro foi lançado.
// const objectArray = books.map((obj) => ({ author: obj.author.name , age: obj.releaseYear - obj.author.birthYear }))
// .sort((authorOne, authorTwo) => (authorOne.age - authorTwo.age));
// console.log(objectArray);

// Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
const genderArray = books.filter((element) => element.genre.toLowerCase() === 'fantasia' 
|| element.genre.toLowerCase() === 'ficção científica' );
// console.log(genderArray);

// Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.
const books60YearsOld = books.filter((book) => 2022 - book.releaseYear > 60)
.sort((bookOne, bookTwo) => bookOne.releaseYear - bookTwo.releaseYear);
// console.log(books60YearsOld);

// Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
const alfabeticOrder = genderArray.map((author) => author.author.name)
.sort();
// console.log(alfabeticOrder);

// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const nameBooks60YearsOld = books60YearsOld.map((bookName) => bookName.name);
// console.log(nameBooks60YearsOld);

// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
function authorWith3DotsOnName(author) {
  let counter = 0;
  for (const i of author.author.name) {
    if (i === '.') {
      counter += 1;
    }
  }
  if (counter === 3) {
    return author.name;
  }
};

const ThreeDotsName = books.find(authorWith3DotsOnName).name;
console.log(ThreeDotsName);