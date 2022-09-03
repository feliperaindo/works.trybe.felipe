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
console.log(getText);