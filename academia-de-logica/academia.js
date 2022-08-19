//Exercício 1.
let marina = 11;
let silvia = 5;
let iza = 9;

if (marina < silvia && marina < iza) {
    console.log ("Marina é a mais jovem e possui", marina, "anos de idade.")
} else if (silvia < marina && silvia < iza) {
    console.log ("Silvia é a mais jovem e possui", silvia, "anos de idade.")
} else if (iza < marina && iza < silvia) {
    console.log ("Iza é a mais jovem e possui", iza, "anos de idade.")
} else {
    console.log ("Uma ou mais pessoas tem a mesma idade.")
}

//Exercício 2.
let age = 40;
let sex = 1; //input de 1 = (homem), 2 = (mulher), 3 ou mais como gêneros não biários, trans e etc.
let weight = 80;
let height = 180;
let x;

if (sex === 1){
    x = (height * 6.25) + (weight * 9.99) - (age * 4.92) + 5;
} else if (sex === 2) {
    x = (height * 6.25) + (weight * 9.99) - (age * 4.92) - 161;
} else {
    console.log("Verifique com sua nutricionista, para um tratamento mais específico.")
}

console.log("A taxa metabólica basal é:", x, "Kcal");

//Exercício 3.
let peopleChose = 4;
let entrega;

switch (peopleChose) {
    case 1:
        entrega = "Trybe Lanche Feliz";
        break;
    case 2:
        entrega = "McTrybe";
        break;
    case 3:
        entrega = "TrybeWooper";
        break;
    case 4:
        entrega = "X-Trybe";
        break;
    case 5:
        entrega = "Triplo Trybe com JS";
        break;
    default:
        console.log("Ainda não possuímos esta opção :(")
}
console.log(entrega);