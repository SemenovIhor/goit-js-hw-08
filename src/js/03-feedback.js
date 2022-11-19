import throttle from 'lodash.throttle';

// sem@gmail.com
const STORAGE_KEY = 'feedback-form-state';

const formData = {

}



const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  console.log(formData);
});

populateTextarea()

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log('відправка');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
  const massage = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea(e) {
  const savedMassage = localStorage.getItem(STORAGE_KEY);
  const parsedMassage = JSON.parse(savedMassage);

  if (parsedMassage) {
    refs.textarea.value = parsedMassage.message;
    refs.input.value = parsedMassage.email;
  }
}