// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.
const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];
  
function containsA(p, i) {
    for (const iterator of i.toLowerCase()) {
        if (iterator === 'a') { p += 1; }    
    }
    return p;
};

const countALetter = names.reduce(containsA, 0);
console.log(countALetter);