const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 
  19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const getElement = document.getElementById('days');

function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };

  function createDays(array) {
    for (let index = 0; index < array.length; index++) {
      const createElement = document.createElement('li');;
      createElement.classList.add('day');
      createElement.innerText = array[index];
      if (array[index] === 24 || array[index] === 25 || array[index] === 31) {
        createElement.classList.add('day-holiday')
      }
      getElement.appendChild(createElement);
    }
  }
  
  createDaysOfTheWeek();
  createDays(decemberDaysList);
  
  // Escreva seu código abaixo.