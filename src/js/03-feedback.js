import throttle from 'lodash.throttle';

// sem@gmail.com
const STORAGE_KEY = 'feedback-form-state';


const filterForm = document.querySelector('.feedback-form');
let selectedFilters = {};

initForm();

filterForm.addEventListener('input', throttle(e => {
  const formData = new FormData(filterForm);
  selectedFilters[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedFilters));
}, 500));


filterForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  selectedFilters = {}; 
}


function initForm() {
  let persistedFilters = localStorage.getItem(STORAGE_KEY);
  if (persistedFilters) {
    persistedFilters = JSON.parse(persistedFilters)
    Object.entries(persistedFilters).forEach(([name, value]) => {
      selectedFilters[name] = value;
      filterForm.elements[name].value = value;
    });
  }
};