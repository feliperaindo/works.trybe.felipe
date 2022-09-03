let changeToGreen = document.getElementById('header-container');
let changeToPink = document.querySelector('.emergency-tasks');
let changeToDarkPink = document.querySelectorAll('.emergency-tasks h3');
let changeToYellow = document.getElementsByClassName('no-emergency-tasks');
let changeToDark = document.getElementsByTagName('h3');
let changeToDarkGreen = document.querySelector('footer');
changeToDarkGreen.style.backgroundColor = 'rgb(32, 100, 19)';
changeToYellow[0].style.backgroundColor = 'rgb(255, 191, 73)';
changeToGreen.style.backgroundColor = 'green';
changeToPink.style.backgroundColor = 'pink';

for (const i of changeToDarkPink) {
    i.style.backgroundColor = 'purple';
};

for (let index = 2; index < changeToDark.length; index++) {
    changeToDark[index].style.backgroundColor = 'black';
};
