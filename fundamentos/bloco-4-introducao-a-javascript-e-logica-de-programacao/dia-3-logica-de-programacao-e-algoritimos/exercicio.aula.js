// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:
let sum = 0;

    for (let index = 1; index <= 50; index += 1) {
        sum += index;
    }
    console.log(sum);

//2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let divisiveisPorTres = 0;

    for (let i = 2; i <= 150; i += 1) {
        if (i % 3 === 0) {
            divisiveisPorTres += 1; 
        }      
    }
    console.log(divisiveisPorTres);

// 3 - Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas
// jogando e imprima o resultado no formato: "Player 1 won" ou "A Ties" ou "Player 2 won".

let jokenpo = ["rock", "paper", "scissors"];
let playerOne = jokenpo[Math.floor(Math.random() * 3)];
let playerTwo = jokenpo[Math.floor(Math.random() * 3)];
let result;

    switch (true) {
        //Player1
        case (playerOne === "rock") && (playerTwo === "paper"):
            result = "Player 2 won";
            break;
        case (playerOne === "paper") && (playerTwo === "scissors"):
            result = "Player 2 won";
            break;
        case (playerOne === "scissors") && (playerTwo === "rock"):
            result = "Player 2 won";
            break;
        //Player2
        case (playerTwo === "rock") && (playerOne === "papper"):
            result = "Player 1 won";
            break;
        case (playerTwo === "papper") && (playerOne === "scissors"):
            result = "Player 1 won";
            break;
        case (playerTwo === "scissors") && (playerOne === "rock"):
            result = "Player 1 won";
            break;
        //Empate
        default: result = "A Ties";
    }
    console.log(result);


//4 - Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade. Imprima no console seguindo o 
// exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.
let person = Math.floor(Math.random() * 100 + 1);
let verify = (person >= 18 ? "A pessoa é maior de idade." : "A pessoa não é maior de idade.")
console.log(verify);
console.log(person);


// 5 - Crie um algoritmo que recebe a idade de Noel, Ellen e Nasc e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.
let noelAge = 39;
let ellenAge = 26;
let nascAge = 30;
let maisNova;

switch (true) {
    //Nasc
    case (nascAge < ellenAge) && (nascAge < noelAge):
        maisNova = "Nasc";
        break;
    case (ellenAge < nascAge) && (ellenAge < noelAge):
        maisNova = "Ellen";
        break;
    case (noelAge < ellenAge) && (noelAge < ellenAge):
        maisNova = "Noel";
        break;
    default: maisNova = "Uma ou mais Pessoas tem a mesma idade";
}
console.log(maisNova);
