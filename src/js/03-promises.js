import Notiflix from 'notiflix';
import { debounce } from "debounce";

const refs = {
  form: document.querySelector('.form'),
  
}
let formData = {};
let delay = 0;
let position = 0;


refs.form.addEventListener('input', debounce(onInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function createPromise() {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
       if (shouldResolve) {
      resolve('success')
    } else {
      reject('error')
    }
  });
}

function launchNotifications() {
    createPromise({ position, delay })
    .then(() => {
     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(() => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    }   

function onInput(event) {
  formData[event.target.name] = event.target.value;
};

function onFormSubmit(event) {
  event.preventDefault();
  event.target.reset();
      let startDelay = formData.delay;
      let step = formData.step;
      let amount = formData.amount;
    setTimeout(() => {
      const intervalId = setInterval(() => {
        delay = step * position + Number(startDelay);
        position += 1;
        if (position >= amount) {
          clearInterval(intervalId);
          
        }
        launchNotifications();
        
      }, step);
       
    }, startDelay);
  
  formData = {};
}