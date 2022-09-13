// const button = document.getElementById('add-button');
// const input = document.getElementById('phrases-input');
// const list = document.getElementById('phrases-list');

// function insertPhraseInDOM() {
//   const phrasesList = JSON.parse(localStorage.getItem('phrases'));
//   const listLength = phrasesList.length - 1;
//   const phraseText = phrasesList[listLength];
//   const phrase = document.createElement('li');
//   phrase.innerText = phraseText;
//   list.appendChild(phrase);
// }

// function addPhraseToLocalStorage() {
//   const oldList = JSON.parse(localStorage.getItem('phrases'));
//   const phraseText = input.value;
//   oldList.push(phraseText);
//   localStorage.setItem('phrases', JSON.stringify(oldList));
//   insertPhraseInDOM();
// }

// function initialRenderization() {
//   if (localStorage.getItem('phrases') === null) {
//     localStorage.setItem('phrases', JSON.stringify([]));
//   } else {
//     const phrasesList = JSON.parse(localStorage.getItem('phrases'));
//     const listLength = phrasesList.length - 1;
//     for (let index = 0; index <= listLength; index += 1) {
//       const listElement = document.createElement('li');
//       listElement.innerText = phrasesList[index];
//       list.appendChild(listElement);
//     }
//   }
// }

// button.addEventListener('click', addPhraseToLocalStorage);

// window.onload = function() {
//   initialRenderization();
// };

// const button = document.getElementById('add-button');
// const input = document.getElementById('phrases-input');
// const list = document.getElementById('phrases-list');

// function insertPhraseInDOM() {
//   const phrasesList = JSON.parse(sessionStorage.getItem('phrases'));
//   const listLength = phrasesList.length - 1;
//   const phraseText = phrasesList[listLength];
//   const phrase = document.createElement('li');
//   phrase.innerText = phraseText;
//   list.appendChild(phrase);
// }

// function addPhraseToSessionStorage() {
//   if (sessionStorage.getItem('phrases') === null) {
//     sessionStorage.setItem('phrases', JSON.stringify([]));
//   }
//   const oldList = JSON.parse(sessionStorage.getItem('phrases'));
//   const phraseText = input.value;
//   oldList.push(phraseText);
//   sessionStorage.setItem('phrases', JSON.stringify(oldList));
//   insertPhraseInDOM();
// }

// button.addEventListener('click', addPhraseToSessionStorage);

const getBody = document.getElementsByTagName('body');
const getBColorButton = document.getElementById('button-b-color');
const getTColorButton = document.getElementById('button-t-color');
const getSizeButton = document.getElementById('button-size');
const getLineButton = document.getElementById('button-space');
const getFontButton = document.getElementById('button-font');

function createElement(element) {
    const elementCreate = document.createElement(element);
    return elementCreate;
}

function saveStorage(storage, item) {
    if (localStorage.getItem(storage) === null) {
        let array = [item];
        localStorage.setItem(storage, JSON.stringify(array));
    } else {
        const itens = JSON.parse(localStorage.getItem(storage));
        itens.push(item);
        localStorage.setItem(storage, JSON.stringify(itens));
    }
}

function changeBack() {
    const inputBColorButton = document.getElementById('back-color-input');
    const historyBackList = document.getElementById('back-color-input-list');
    let value = inputBColorButton.value;

    if (value === '') {
        alert('Cor inválida!');
    } else {
        getBody[0].style.backgroundColor = value;
        const newElement = createElement('li');
        newElement.innerText = value;
        historyBackList.appendChild(newElement);
        saveStorage('backColor', newElement.innerText);
    }
    console.log(param);
}

function changeTextColor() {
    const inputTColorButton = document.getElementById('text-color-input');
    const historyTextList = document.getElementById('text-color-input-list');
    let value = inputTColorButton.value;

    if (value === '') {
        alert('Cor inválida!');
    } else {
        getBody[0].style.color = value;
        const newElement = createElement('li');
        newElement.innerText = value;
        historyTextList.appendChild(newElement);
        saveStorage('textColor', newElement.innerText);
    }
}

function changeSize() {
    const inputSizeButton = document.getElementById('font-size-input');
    const historySizeList = document.getElementById('font-size-input-list');
    let value = inputSizeButton.value;

    if (value === '') {
        alert('Tamanho inválido!');
    } else {
        getBody[0].style.fontSize = value + 'px';
        const newElement = createElement('li');
        newElement.innerText = value + 'px';
        historySizeList.appendChild(newElement);
        saveStorage('textSize', newElement.innerText);
    }
}

function changeLine() {
    const inputLineButton = document.getElementById('line-range-input');
    const historyLineList = document.getElementById('line-range-input-list');
    let value = inputLineButton.value;

    if (value === '') {
        alert('Tamanho inválido!');
    } else {
        getBody[0].style.lineHeight = value + 'px';
        const newElement = createElement('li');
        newElement.innerText = value + 'px';
        historyLineList.appendChild(newElement);
        saveStorage('lineSize', newElement.innerText);
    }
}

function changeFont() {
    const inputFontButton = document.getElementById('font-input');
    const historyFontList = document.getElementById('font-list');
    let value = inputFontButton.value;

    if (value === '') {
        alert('Fonte inválida!');
    } else {
        getBody[0].style.fontFamily = value;
        const newElement = createElement('li');
        newElement.innerText = value;
        historyFontList.appendChild(newElement);
        saveStorage('fonts', newElement.innerText);
    }
}

function applayOnPage(key, item) {
    switch (key) {
        case 'backColor':
            getBody[0].style.backgroundColor = item;
            break;
        case 'textColor':
            getBody[0].style.color = item;
            break;
        case 'textSize':
            getBody[0].style.fontSize = item;
            break;
        case 'lineSize':
            getBody[0].style.lineHeight = item;
            break;
        case 'fonts':
            getBody[0].style.fontFamily = item;
            break;
    }
}

function recoveryLocalStorage(key, element) {
    const getSave = JSON.parse(localStorage.getItem(key));

    if (getSave === null) {
        return;
    } else {
        for (let i = 0; i < getSave.length; i += 1) {
            const newElement = createElement('li');
            newElement.innerText = getSave[i];
            element.appendChild(newElement);
        }
        let lastItem = getSave[getSave.length - 1];
        applayOnPage(key, lastItem);
    }
}

function recoveryData() {
    const historyBackList = document.getElementById('back-color-input-list');
    const historyTextList = document.getElementById('text-color-input-list');
    const historySizeList = document.getElementById('font-size-input-list');
    const historyLineList = document.getElementById('line-range-input-list');
    const historyFontList = document.getElementById('font-list');
    
    recoveryLocalStorage('backColor', historyBackList);
    recoveryLocalStorage('textColor', historyTextList);
    recoveryLocalStorage('textSize', historySizeList);
    recoveryLocalStorage('lineSize', historyLineList);
    recoveryLocalStorage('fonts', historyFontList);
}

getBColorButton.addEventListener('click', changeBack);
getTColorButton.addEventListener('click', changeTextColor);
getSizeButton.addEventListener('click', changeSize);
getLineButton.addEventListener('click', changeLine);
getFontButton.addEventListener('click', changeFont);

window.onload = recoveryData();