window.onload;
    /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
    */
// 1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de
// como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)

function changeTagText() {
let getP = document.querySelectorAll('.center-content p');

getP[1].innerHTML = 'vou estar trabalhando';
}
changeTagText();

// 2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function changeSquareColor() {
    let getSquare = document.getElementsByClassName('main-content');

getSquare[0].style.backgroundColor = 'green';
}
changeSquareColor();

// 3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.

function changeInsideSquareColor() {
    let getInsideSquare = document.getElementsByTagName('section');

getInsideSquare[0].style.backgroundColor = 'white';
}
changeInsideSquareColor();

// 4. Crie e execute uma função que corrija o texto da tag <h1>.

function reWriteText() {
    let getHead = document.querySelector('.title');

getHead.innerHTML = 'Exercício 5.1 - JavaScript';
}
reWriteText();

// 5. Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.

function changeText() {
    let getPText = document.getElementsByTagName('p');

    for (let i of getPText) {
        i.innerText = i.innerHTML.toUpperCase();
    }
}
changeText();

// 6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.

function showAllContent() {
    let showP = document.querySelectorAll('p');

    for (const i of showP) {
        console.log(i);
    }
}
showAllContent();

