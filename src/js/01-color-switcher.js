//refs
const body = document.querySelector('body');

const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
buttonStart.classList.add('button');
buttonStop.classList.add('button');
buttonStart.classList.add('hiddenOff');
buttonStop.classList.add('hiddenOn');

let timerSet = null;

let randomColor;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
//addlistener
buttonStart.addEventListener('click', handlerStart);
buttonStop.addEventListener('click', handlerStop);

function handlerStart(event) {
  timerSet = setInterval(() => {
    randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
  }, 1000);
  buttonStart.disabled = true;
  buttonStop.disabled = false;

  if ((buttonStart.disabled = true)) {
    buttonStart.classList.replace('hiddenOff', 'hiddenOn');
    buttonStop.classList.replace('hiddenOn', 'hiddenOff');
  }
}

function handlerStop(event) {
  clearInterval(timerSet);

  buttonStart.disabled = false;
  buttonStop.disabled = true;

  if ((buttonStop.disabled = true)) {
    buttonStop.classList.replace('hiddenOff', 'hiddenOn');
    buttonStart.classList.replace('hiddenOn', 'hiddenOff');
  }
}

//function
// body.style.backgroundColor = randomColor;
