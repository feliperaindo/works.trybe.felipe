// Faça uma lista com as suas frutas favoritas
const specialFruit = ['manga', 'laranja', 'maça'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['melancia', 'uva', 'ameixa'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));