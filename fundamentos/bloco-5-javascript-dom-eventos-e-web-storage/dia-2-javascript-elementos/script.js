//Exercicio primeira parte.
let getElement = document.getElementById('elementoOndeVoceEsta').parentElement;
getElement.style.color = 'red';

let getSon = document.getElementById('elementoOndeVoceEsta').firstElementChild;
getSon.innerText = 'texto do filho';

// let getSonByFather = document.getElementById('pai').firstElementChild;
// console.log(getSonByFather);

// let getSonByFather = document.getElementById('elementoOndeVoceEsta').previousElementSibling;
// console.log(getSonByFather);

// let getText = document.getElementById('elementoOndeVoceEsta').nextSibling;
// console.log(getText);

// let getText = document.getElementById('elementoOndeVoceEsta').nextElementSibling;
// console.log(getText);

let getText = document.getElementById('pai').lastElementChild.previousElementSibling;

//Exercício segunda parte.
let element = document.getElementById('pai');

let createElement = document.createElement('section');

createElement.innerText = 'novo elemento';

element.appendChild(createElement);

let elementoTwo = document.getElementById('elementoOndeVoceEsta');

let createDiv = document.createElement('div');

createDiv.innerHTML = 'mais um <strong>elemento</strong> no meu html';

elementoTwo.appendChild(createDiv);

getSon.appendChild(createDiv);