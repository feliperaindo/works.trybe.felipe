//Exercício 1 ao 3.
const a;
const b;
const c;
const parameter;

let anguloUmTriangulo;

let anguloDoisTriangulo;

let anguloTresTriangulo;

let adicao = a + b;

let subtracao = a - b;

let multiplicacao = a * b;

let divisao = a / b;

let modulo = a % b;

let maiorNumero;

let maiorDeTres;

if (a > b) {
  maiorNumero = a;
  console.log('o número "a" é maior que o número "b".')
} else if (b > a) {
  maiorNumero = b;
  console.log('o número "b" é maior que o número "a".')
} else {
  console.log('as duas entradas tem o mesmo valor.')
}

if (a > b && a > c) {
  maiorDeTres = a;
  console.log('o número "a" é maior que o número "b" e "c".')
} else if (b > c && b > a) {
  maiorDeTres = b;
  console.log('o número "b" é maior que o número "a" e "c".')
} else if (c > a && c > b) {
  maiorDeTres = c;
  console.log('o número "c" é maior que o número "a" e "b".')
} else {
  console.log("dois ou mais números são iguais.")
}

//Exercício 4.
switch (parameter) {
  case "positive":
    console.log("positivo");
    break;
  case "negative":
    console.log("negativo");
    break;
  default:
    console.log("zero");
}

//Exercício 5.
if ((anguloDoisTriangulo && anguloTresTriangulo && anguloUmTriangulo > 0) && (anguloDoisTriangulo + anguloTresTriangulo + anguloUmTriangulo === 180)) {
  console.log("true. Esses ângulos formam um triângulo.");
} else if (anguloDoisTriangulo || anguloTresTriangulo || anguloUmTriangulo <= 0) {
  console.log("erro: parâmetros inválidos")
} else {
  console.log("False. Esses ângulos não formam um triângulo.")
}

//Exercício 6.
let pecaDoJogo;
let movimento;

switch (pecaDoJogo.toLowerCase()) {
  case king:
    movimento = "uma casa; movimento livre vertical, horizontal e diagonal, desde de que o rei não se mova para uma casa que entre em xeque.";
    break;
  case queen:
    movimento = "tantas casas quanto possíveis; movimento livre vertical, horizontal e diagonal. Uma vez escolhido o sentido do movimento não se poderá modificá-lo ou mudar o seu curso/trajetória até a próxima jogada.";
    break;
  case pawn:
    movimento = "uma casa; movimento vertical em sentido único, da casa inicial até o fim da coluna, sempre para frente. Em caso de ser a primeira vez que o peão se movimenta no jogo, o jogador poderá escolher entre o peão avançar uma ou duas casas em uma única jogada. Capturas serão feitas em um movimento diagonal de avanço, também com limitação de movimento de uma casa. Caso especial de captura: Se o peão adversário avançar duas casas em um único lançe, o jogador adversãrio, caso tenha um peão que pudesse capturar o peão adversário se este apenas houvesse se movido uma única casa, poderá a critério do jogador, na jogada subsequente ao avanço duplo, efetuar a captura desse peão 'en passant'.";
    break;
  case bishop:
    movimento = "tantas casas quanto possíveis; movimento livre diagonal. Uma vez escolhido o sentido do movimento não se poderá modificá-lo ou mudar o seu curso/trajetória até a próxima jogada.";
    break;
  case hook:
    movimento = "tantas casas quanto possíveis; movimento livre horizontal e vertical. Uma vez escolhido o sentido do movimento não se poderá modificá-lo ou mudar o seu curso/trajetória até a próxima jogada.";
    break;
  case knigth:
    movimento = "movimento realizado em formato de 'L'. A peça se movimentará deslocando-se sempre duas casas em uma direção não oblíqua (frente, tras, direita, esquerda) e uma casa na direção perpendicular (angular em 90º) em sentido horário ou anti-horário, podendo realiza-lo em sentido de avanço ou recuo. Caso especial de movimentação: A única peça no jogo capaz de 'saltar' sobre outras peças. Essa peça pode se movimentar ignorando se durante o seu trajeto passará sobre outras peças que sejam do próprio jogador ou do jogador adversário. A captura não é realizada caso essa peça 'salte' sobre a peça adversária. Capturas apenas são realizadas se a peça adversária estiver localizada na casa final do movimento do cavalo.";
    break;
  default:
    movimento = "entrada inválida. Por favor tente novamente."
}

console.log (movimento);

//Exercício 7.
let notaPercentagem;
let notaAtoF;

switch (notaPercentagem) {
  case notaPercentagem >= 90:
    notaAtoF = "A";
    break;
  case notaPercentagem >= 80:
    notaAtoF = "B";
    break;
  case notaPercentagem >= 70:
    notaAtoF = "C"
    break;
  case notaPercentagem >= 60:
    notaAtoF = "D";
    break
  case notaPercentagem >= 50:
    notaAtoF = "E";
    break;
  case notaPercentagem < 50:
    notaAtoF = "F";
    break;
  default: notaPercentagem < 0 || notaPercentagem > 100;
    console.log ("número inválido.")
}

console.log (notaAtoF);

//Exercício 8 a 9.
const number1;
const number2;
conts number3;

if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0) {
  console.log ();
} else {
  console.log();
}

if (number1 % 2 === 1 || number2 % 2 === 1 || number3 % 2 === 1) {
  console.log ();
} else {
  console.log();
}

//Exercício 10.
const cost;
const sellPrice;
let costPlusTax = cost * 1.2;
let profit = (sellPrice - costPlusTax) * 1000;

if (profit < 0){
  console.log("Erro. Seu saldo está negativo.")
} else {
  console.log (profit);
}

//Exercício 11.
let salaryNoDiscounted;
let salaryDiscounted;
let liquidSalary;

switch (salaryNoDiscounted) {
  case salaryNoDiscounted <= 1556.94:
    salaryDiscounted = salaryNoDiscounted * 0.92;
    break;
  case salaryNoDiscounted > 1556.94 && salaryNoDiscounted <= 2594.92:
    salaryDiscounted = salaryNoDiscounted * 0.91;
    break;
  case salaryNoDiscounted > 2594.92 && salaryNoDiscounted <= 5189.82:
    salaryDiscounted = salaryNoDiscounted * 0.89;
    break;
  case salaryNoDiscounted > 5189.82:
    salaryDiscounted = salaryNoDiscounted - 570.88
}

switch (salaryDiscounted) {
  case salaryDiscounted <= 1903.98:
    liquidSalary = salaryDiscounted;
    break;
  case salaryDiscounted > 1903.98 && salaryDiscounted <= 2826.65:
    liquidSalary = salaryDiscounted - (salaryDiscounted * 0.075 - 142.80);
    break;
  case salaryDiscounted > 2826.65 && salaryDiscounted <= 3751.05:
    liquidSalary = salaryDiscounted - (salaryDiscounted * 0.15 - 354.80);
    break;
  case salaryDiscounted > 3751.05 && salaryDiscounted <= 4664.68:
    liquidSalary = salaryDiscounted - (salaryDiscounted * 0.225 - 636.13);
    break;
  case salaryDiscounted > 4664.68:
    liquidSalary = salaryDiscounted - (salaryDiscounted * 0.275 - 869.36)
}

console.log (liquidSalary);
