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

  function createATask() {
    const getTaskValue = document.getElementById('task-input-tarefa');
    if (getTaskValue.value !== '') {
      const myTask = createElement('span');
      myTask.classList.add('my-tasks');
      myTask.innerText = getTaskValue.value;
      getDivTasks.appendChild(myTask);
    } else {
      alert('tarefa não informada.')
    }
  }

  createDaysOfTheWeek(weekDays);
  createDays(decemberDaysList);
  buttonHoliday('Feriados');
  fridayButton('Sexta-Feira');

  const getButtonHoliday = document.getElementById('btn-holiday');
  const getButtonFriday = document.getElementById('btn-friday');
  const getDays = document.querySelectorAll('.day');
  const getAddButtonTask = document.querySelector('#btn-add-tarefa');

  getDays.forEach(day => {day.addEventListener('mouseover', zoomInDay)});
  getDays.forEach(day => {day.addEventListener('mouseleave', zoomOutDay)});

  getButtonHoliday.addEventListener('click', verifyColorToChange);
  getButtonFriday.addEventListener('click', getFridayDays);
  getAddButtonTask.addEventListener('click', createATask)
