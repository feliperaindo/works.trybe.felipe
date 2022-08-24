//Exercício 1.
function romanosToNumber (string) {
    let relation = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let compare = string.toUpperCase();
    let finalNumber = 0;

    for (let i = compare.length-1; i >= 0; i--) {
        if (finalNumber === 0) {
            finalNumber = relation[compare[i]];
        } else if (relation[compare[i+1]] <= relation[compare[i]]) {
            finalNumber += relation[compare[i]];
        } else {
            finalNumber -= relation[compare[i]];
        }
    }
    return finalNumber;
}
console.log(romanosToNumber());