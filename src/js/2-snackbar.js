// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form')
const input = document.querySelector('.input');
const inputFulfilled = document.querySelector('.fulfilled');
const inputRejected = document.querySelector('.rejected');
const submitBtn = document.querySelector('.submit-btn');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const formValues = Object.fromEntries(formData.entries()); 
    const delay = Number(formValues.delay);
    const state = formValues.state;
    createPromise(delay, state)
        .then((message) => iziToast.success({
            position: "topRight",
            title: 'OK',
            message: `Fulfilled promise in ${delay} ms`,
        }))
        .catch((error) => iziToast.error({
            position: "topRight",
            title: 'Error',
            message: `Rejected promise in ${delay} ms`,
        }));
    form.reset();
})

function createPromise(delay,state) {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            if(state === 'fulfilled') {
                resolve()
            } else {
                reject()
            }
        },delay)
    })
}