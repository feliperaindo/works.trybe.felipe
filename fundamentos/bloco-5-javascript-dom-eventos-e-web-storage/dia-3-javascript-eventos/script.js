const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 
19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const weekDaysList = document.querySelector('.week-days');
const getElement = document.getElementById('days');
const getDiv = document.querySelector('.buttons-container');
const getDivTasks = document.querySelector('.my-tasks');
var color = true;

function createElement(string) {
  const elementToCreate = document.createElement(string);
  return elementToCreate;
}

function createDaysOfTheWeek(array) {
    for (const i of array) {
      const days = createElement('li');
      days.innerHTML = i;
      weekDaysList.appendChild(days);
    };
  };

  function verifyHoliday(element, number) {
    if (number === 24 || number === 25 || number === 31) {
      element.classList.add('holiday')
    }
  }

  function verifyFryday(element, number) {
    if (number === 4 || number === 11 || number === 18 || number === 25) {
      element.classList.add('friday')
    }
  }

  function createDays(array) {
    for (const i of array) {
      const element = createElement('li');
      element.classList.add('day');
      element.innerText = i;
      getElement.appendChild(element);
      verifyHoliday(element, i);
      verifyFryday(element, i);
    }
  }

  function buttonHoliday(string) {
    const button = createElement('button');
    button.setAttribute('id', 'btn-holiday');
    button.type = 'button';
    button.innerText = string;
    getDiv.appendChild(button);
  }

  function changeColorHoliday(color) {
    const getHolidays = document.querySelectorAll('.holiday');
    for (const i of getHolidays) {
      i.style.backgroundColor = color;
      }
  }

  function verifyColorToChange() {
    if (color === true) {
      changeColorHoliday('rgb(50, 50, 50)')
      color = false;
      return;
    } changeColorHoliday('rgb(238,238,238)');
    color = true;
  }

  function fridayButton(string) {
    const fridayButton = createElement('button');
    fridayButton.type = 'button';
    fridayButton.setAttribute('id', 'btn-friday');
    fridayButton.innerText = string;;
    getDiv.appendChild(fridayButton);
  }

  function changeFridayValue(getAllFridayDays, array) {
    for (let index = 0; index < getAllFridayDays.length; index += 1) {
      getAllFridayDays[index].innerText = array[index]
    }
  }

  function getFridayDays() {
    const getAllFridayDays = document.querySelectorAll('.friday');
    if (getAllFridayDays[0].innerText === 'sexta-feira') {
      changeFridayValue(getAllFridayDays, [4, 11, 18, 25]);
    } else {
      changeFridayValue(getAllFridayDays, ['sexta-feira', 'sexta-feira', 'sexta-feira', 'sexta-feira'])
    }
  }

  function zoomInDay(element) {
    const day = element.target;
    day.style.zoom = '200%';
  }

  function zoomOutDay(element) {
    const day = element.target;
    day.style.removeProperty('zoom');
  }

  function randomColor() {
    const randomCor = Math.floor(Math.random() * 255);
    return randomCor;
  }

  function colorTask() {
    let numberOne = randomColor();
    let numberTwo = randomColor();
    let numberThree = randomColor();
    let color = 'rgb(' + numberOne + ', ' + numberTwo + ', ' + numberThree + ')';
    return color;
  }

  function taskSelected(tarefa) {
    const getTasks = document.querySelectorAll('.task');
    const tarefaClicada = tarefa.target;

    if (tarefaClicada.classList.contains('selected')) {
      tarefaClicada.classList.remove('selected');
    } else {
      for (const i of getTasks) {
        i.classList.remove('selected');
      }
      tarefaClicada.classList.add('selected');
    }
  }

  function createATask() {
    const getTaskValue = document.getElementById('task-input');

    if (getTaskValue.value !== '') {
      const taskColor = colorTask();
      const taskCreator = createElement('div');
      const myTask = createElement('span');

      taskCreator.classList.add('task');
      myTask.classList.add('my-tasks');

      taskCreator.style.backgroundColor = taskColor;
      myTask.innerText = getTaskValue.value;

      getDivTasks.appendChild(taskCreator);
      getDivTasks.appendChild(myTask);

      const getTasks = document.querySelectorAll('.task');
      getTasks.forEach(task => {task.addEventListener('click', taskSelected)});
    } else {
      alert('tarefa não informada.')
    }
  }

  function colorDay(click) {
    const dayCliked = click.target;
    const colorDay = window.getComputedStyle(dayCliked).color;
    const gettaskColor = document.querySelector('.selected');

    if (colorDay !== 'rgb(119,119,119)' && gettaskColor === null) {
      dayCliked.style.color = 'rgb(119,119,119)';
    } else {
      dayCliked.style.color = gettaskColor.style.backgroundColor;
    }
  }

  function verifyKey(keydown) {
    if (keydown.key === 'Enter') {
      createATask();
    }
  }

  createDaysOfTheWeek(weekDays);
  createDays(decemberDaysList);
  buttonHoliday('Feriados');
  fridayButton('Sexta-Feira');

  const getButtonHoliday = document.getElementById('btn-holiday');
  const getButtonFriday = document.getElementById('btn-friday');
  const getDays = document.querySelectorAll('.day');
  const getAddButtonTask = document.querySelector('#btn-add');
  const getTaskValue = document.getElementById('task-input');
  
  getDays.forEach(day => {day.addEventListener('mouseover', zoomInDay)});
  getDays.forEach(day => {day.addEventListener('mouseleave', zoomOutDay)});
  getDays.forEach(day => {day.addEventListener('click', colorDay)});

  getButtonHoliday.addEventListener('click', verifyColorToChange);
  getButtonFriday.addEventListener('click', getFridayDays);
  getAddButtonTask.addEventListener('click', createATask);
  getTaskValue.addEventListener('keydown', verifyKey);
