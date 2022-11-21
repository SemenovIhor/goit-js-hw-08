import throttle from 'lodash.throttle';

// sem@gmail.com
const STORAGE_KEY = 'feedback-form-state';

const formData = {

}

const refs = {
  form: document.querySelector('.feedback-form'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  console.log(formData);
});


function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

let formElements = refs.form.elements;

const populateForm = () => {
  if (localStorage.getItem(STORAGE_KEY)) {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    for (const element of formElements) {
      if (element.name in savedData) {
        element.value = savedData[element.name];
      }
    }
  }
};
document.onload = populateForm();