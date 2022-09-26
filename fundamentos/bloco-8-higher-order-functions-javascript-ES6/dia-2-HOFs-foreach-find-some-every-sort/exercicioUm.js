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
  
  // Adicione o código do exercício aqui:

//Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
function authorBornIn1947(item) {
    return item.author.birthYear === 1947
};
// const getFirst = books.find(authorBornIn1947);
// console.log(getFirst);

// Retorne o nome do livro de menor nome.
function smallerName(a, b) { 
    return a.name.length - b.name.length
};
// const getSmaller = books.sort(smallerName);
// console.log(getSmaller[0]);

// Encontre o primeiro livro cujo nome possui 26 caracteres.
function getNamedBook(item) {
return item.name.length === 26;
}
// const get26 = books.find(getNamedBook)
// console.log(get26);

// Ordene os livros por data de lançamento em ordem decrescente.
function booksOrderedByReleaseYearDesc(a, b) {
    return b.releaseYear - a.releaseYear;
}
// const booksListOrdered = books.sort(booksOrderedByReleaseYearDesc);
// console.log(booksListOrdered);

// Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
function everyoneWasBornOnSecXX(authors) {
    return authors.author.birthYear > 1900;
}
// const bornInXX = books.every(everyoneWasBornOnSecXX);
// console.log(bornInXX);

// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
function someBookWasReleaseOnThe80s(book) {
  return book.releaseYear >= 1980;
}
// const someReleaseIn80 = books.some(someBookWasReleaseOnThe80s);
// console.log(someReleaseIn80);

// Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
function authorUnique(creator) {
  const firstAuthor = creator.author.birthYear;
  const secondAuthor = books.filter((age) => age.author.birthYear === firstAuthor);
  if (secondAuthor.length > 1) {
    return true;
  };
};
const bornInSameYear = books.some(authorUnique);
console.log(!bornInSameYear);