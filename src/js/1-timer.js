// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector('.data-input');
const startButton = document.querySelector('.button');
const daysElem =  document.querySelector('[data-days]');
const hoursElem = document.querySelector('[data-hours]');
const minutesElem = document.querySelector('[data-minutes]');
const secondsElem = document.querySelector('[data-seconds]');
let userSelectedDate; 
let countdownInterval;
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

  function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}

const options = {
    enableTime: true,

    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        const now = new Date();
        if (selectedDate > now) {
            userSelectedDate = selectedDate;
            startButton.disabled = false;
        } else {
            iziToast.error({
                position: "topRight",
                title: 'Error',
                message: 'Please choose a date in the future',
            });
            startButton.disabled = true;
        }
      console.log(selectedDates[0]);
    },
  };
flatpickr('#datetime-picker', options);

function startCountdown() {
    if(!userSelectedDate) return;
    startButton.disabled = true;
    input.disabled = true;
    countdownInterval = setInterval(() => {
        const now = new Date();
        const timeDiff = userSelectedDate - now;
        if (timeDiff <= 0) {
            clearInterval(countdownInterval);
            updateTimerDisplay(0, 0, 0, 0);
            startButton.disabled = false;
            input.disabled = false;
            return;
        }
        const { days, hours, minutes, seconds } = convertMs(timeDiff);

        updateTimerDisplay(days, hours, minutes, seconds);
    },1000)
    
}

function updateTimerDisplay(days, hours, minutes, seconds) {
    daysElem.textContent = days;
    hoursElem.textContent = addLeadingZero(hours);
    minutesElem.textContent = addLeadingZero(minutes);
    secondsElem.textContent = addLeadingZero(seconds);
}

startButton.addEventListener("click", startCountdown);