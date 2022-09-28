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

//Crie uma string com os nomes de todas as pessoas autoras.

// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames(p, i) {
  p.push(i.author.name);
  return p
}

// const arrayAuthors = books.reduce(reduceNames, []);
// console.log(arrayAuthors);

// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
function averageAge(p, i) {
    const age = i.releaseYear - i.author.birthYear;
    return p += age;
}

// const mediumAge = books.reduce(averageAge, 0) / books.length;
// console.log(mediumAge);

// Encontre o livro com o maior nome.  
  function longestNamedBook(p, i) { 
    const check = (p.name.length > i.name.length) ? p : i;
    return check;
}

  const getBiggerName = books.reduce(longestNamedBook);
  console.log(getBiggerName);