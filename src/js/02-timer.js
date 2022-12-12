import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"

const refs = {
    timer: document.querySelector('.timer'),
    field: document.querySelector('.field'),
    value: document.querySelector('.value'),
    inputTime: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
    console.log(selectedDates[0]);
    },
    //  {
    //         "disable": [
    //             function (date) {
    //                 return (date.Date() <= date.options.defaultDate);
    //             }
    //         ];
    //     }
};
const fp = flatpickr("#datetime-picker", options);

// options.onClose(selectedDates); {
//     if (selectedDates[0] < options.defaultDate) {
//         alert("Please choose a date in the future")
//     }
// }

console.log(options.defaultDate)