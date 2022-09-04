//Passo 1 - 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
function addH1() {
    let getElement = document.getElementsByTagName('body');
    let createH1 = document.createElement('h1');
    createH1.innerText = 'Exercício 5.2';
    getElement[0].appendChild(createH1);

}
addH1();

//Passo 2 - 🚀 Adicione a tag main com a classe main-content como filho da tag body;
function addMain() {
    let getElement = document.getElementsByTagName('body');
    let createMain = document.createElement('main');
    createMain.className = 'main-content';
    getElement[0].appendChild(createMain);

}
addMain();

//Passo 3 - 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
function addSection() {
    let getElement = document.getElementsByTagName('main');
    let createSection = document.createElement('section');
    createSection.className = 'center-content';
    getElement[0].appendChild(createSection);
}
addSection();

//Passo 4 - 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
function addP() {
    let getElement = document.getElementsByTagName('section');
    let createP = document.createElement('p');
    createP.innerText = 'Texto do exercício';
    getElement[0].appendChild(createP);
}
addP();

//Passo 5 - 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
function addSectionLeft() {
    let getElement = document.getElementsByTagName('main');
    let createSection = document.createElement('section');
    createSection.className = 'left-content'
    getElement[0].appendChild(createSection);
}
addSectionLeft();

//Passo 6 - 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
function addSectionRight() {
    let getElement = document.getElementsByTagName('main');
    let createSection = document.createElement('section');
    createSection.className = 'right-content'
    getElement[0].appendChild(createSection);
}
addSectionRight();

//Passo 7 - 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image.
// Esse elemento deve ser filho do section criado no passo 5;
function addImage() {
    let getElement = document.querySelector('.left-content');
    let createImg = document.createElement('img');
    createImg.className = 'small-image'
    createImg.src = 'https://picsum.photos/200'
    getElement.appendChild(createImg);
}
addImage();

//Passo 8 - 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... 
// como valores da lista. Essa lista deve ser filha do section criado no passo 6;
function addList() {
    let arrayNumbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
    let getElement = document.querySelector('.right-content');
    let createList = document.createElement('ul');
    getElement.appendChild(createList);

    for (let index = 0; index < 10; index++) {
        let getElementTwo = document.querySelector('.right-content ul');
        let createLi = document.createElement('li');
        createLi.innerText = arrayNumbers[index];
        getElementTwo.appendChild(createLi);
    }
}
addList();

//Passo 9 - 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
function addTags() {
    let getElement = document.getElementsByTagName('main');

    for (let index = 0; index < 3; index++) {
        let createH3 = document.createElement('h3');
        getElement[0].appendChild(createH3);
    }
}
addTags();


