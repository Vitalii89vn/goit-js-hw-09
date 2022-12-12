const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
    bodyColorSw: document.querySelector('body')
};

let intervalId = null;

refs.btnStart.addEventListener('click', onClickStart);
refs.btnStop.addEventListener('click', onClickStop);

function onClickStart() {
    intervalId = setInterval(() => {
    refs.bodyColorSw.style.backgroundColor = `${getRandomHexColor()}`;
    }, 1000);
    refs.btnStart.setAttribute('disabled', '');
    refs.btnStop.removeAttribute('disabled');
};

function onClickStop() {
    clearInterval(intervalId);
    refs.btnStop.setAttribute('disabled', '');
    refs.btnStart.removeAttribute('disabled');
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};