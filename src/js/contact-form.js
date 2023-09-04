import localStorageService from './localstorage';

const contactFormEl = document.querySelector('.js-contact-form');
const userData = {};

const fillContactFormFields = () => {
  const userDataFromLS = localStorageService.load('contactFormData');

  if (userDataFromLS === undefined) {
    return;
  }

  for (const key in userDataFromLS) {
    if (userDataFromLS.hasOwnProperty(key)) {
      contactFormEl.elements[key].value = userDataFromLS[key];
    }
  }
};

fillContactFormFields();

const onContactFormFieldElChange = event => {
  const { target: contactFormFieldEl } = event;

  const name = contactFormFieldEl.name;
  const value = contactFormFieldEl.value;

  userData[name] = value;

  localStorageService.save('contactFormData', userData);
};

const onContactFormElSubmit = event => {
  event.preventDefault();

  event.target.reset();
  localStorageService.remove('contactFormData');
};

contactFormEl.addEventListener('change', onContactFormFieldElChange);
contactFormEl.addEventListener('submit', onContactFormElSubmit);
