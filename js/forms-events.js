/*
 * Події елементів форм. focus, blur, change, input, submit
 */

const usernameInputEl = document.querySelector('.js-username-input');
const outputEl = document.querySelector('.js-username-output');
const checkboxEl = document.querySelector('.js-policy-checkbox');
const submitBtnEl = document.querySelector('.js-contact-form-submit');
const contactFormEl = document.querySelector('.js-contact-form');

usernameInputEl.addEventListener('focus', event => {
  usernameInputEl.style.outlineColor = 'teal';
});

usernameInputEl.addEventListener('blur', event => {
  usernameInputEl.style.borderColor = 'yellowgreen';
});

usernameInputEl.addEventListener('input', event => {
  if (usernameInputEl.value === '') {
    outputEl.innerHTML = '';

    return;
  }

  outputEl.textContent = `, ${usernameInputEl.value}`;
});

usernameInputEl.addEventListener('change', event => {
  console.log('Change Event!');
});

checkboxEl.addEventListener('change', event => {
  if (checkboxEl.checked && usernameInputEl.value !== '') {
    submitBtnEl.disabled = false;

    return;
  }

  submitBtnEl.disabled = true;
});

contactFormEl.addEventListener('submit', event => {
  event.preventDefault();

  console.log('Hello!');

  contactFormEl.reset();
});
