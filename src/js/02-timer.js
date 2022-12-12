import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    timer: document.querySelector('.timer'),
    field: document.querySelector('.field'),
    value: document.querySelectorAll('.value'),
    inputTime: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}

refs.btnStart.addEventListener('click', onClickStartTimer)

let deltaTime = null;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    console.log(options.defaultDate);

    if (selectedDates[0] <= options.defaultDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
      refs.btnStart.setAttribute('disabled', '');
      return;

    } refs.btnStart.removeAttribute('disabled');
      deltaTime = selectedDates[0] - options.defaultDate;
    
    }
};


const fp = flatpickr("#datetime-picker", options);
disabledBtnOnStart();

function disabledBtnOnStart() {
  refs.btnStart.setAttribute('disabled', '');
}

function onClickStartTimer() {
   timerId = setInterval(() => {
      if (deltaTime < 1000) {
        clearInterval(timerId);
        return;
    }
    let countdown = convertMs(deltaTime -= 1000);
 
    refs.days.textContent = addLeadingZero(countdown.days);
    refs.hours.textContent = addLeadingZero(countdown.hours);
    refs.minutes.textContent = addLeadingZero(countdown.minutes);
    refs.seconds.textContent = addLeadingZero(countdown.seconds);
   
  }, 1000);
  refs.btnStart.setAttribute('disabled', '');
}
 
function addLeadingZero(value) {
     return `${value}`.padStart(2, '0')
}
  
function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }
