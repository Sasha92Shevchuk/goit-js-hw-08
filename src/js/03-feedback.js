import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');

const textAreaEl = document.querySelector('.feedback-form textarea');
// const submit = document.querySelector('.feedback-form button');

const STORAGE_KEY = 'feedback-form-state';
const getDataForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
// const parsedGetDataForm = JSON.parse(getDataForm);
// console.log(getDataForm);

formEl.addEventListener('input', throttle(onIputHandler, 500));
formEl.addEventListener('submit', onFormSubmit);

updateFieldsForm();

function onIputHandler(e) {
  const { email, message } = e.currentTarget.elements;
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
