import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');

const textAreaEl = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';
const getDataForm = JSON.parse(localStorage.getItem(STORAGE_KEY));

const throttled = throttle(onIputHandler, 500);

formEl.addEventListener('input', e => throttled(e.currentTarget));
formEl.addEventListener('submit', onFormSubmit);

updateFieldsForm();
// let formFields = {};
// function onIputHandler(e) {
//   formFields[e.target.name] = e.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formFields));
// }

function onIputHandler(e) {
  const { email, message } = e.elements;
  const formFields = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formFields));
}

function updateFieldsForm() {
  if (getDataForm) {
    inputEl.value = getDataForm.email || '';
    textAreaEl.value = getDataForm.message || '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(getDataForm);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
