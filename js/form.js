// 1 Варіант
// const contactFormEl = document.querySelector('.js-contact-form');
// const outputContactFormEl = document.querySelector('.js-output-form-data');

// const onContactFromElSubmit = event => {
//   event.preventDefault();

//   const formData = new FormData(event.currentTarget);

//   let formDataTemplate = '';

//   for (const arr of formData) {
//     const [name, value] = arr;

//     formDataTemplate += `<p>${name}: ${value}</p>`;
//   }

//   outputContactFormEl.innerHTML = formDataTemplate;
// };

// contactFormEl.addEventListener('submit', onContactFromElSubmit);

// 2 Варіант
// const contactFormEl = document.querySelector('.js-contact-form');
// const outputContactFormEl = document.querySelector('.js-output-form-data');

// const onContactFromElSubmit = event => {
//   event.preventDefault();

//   const { currentTarget: formEl } = event;

//   console.dir(event.currentTarget);

//   console.log(formEl.elements.user_email.value);
//   console.log(formEl.elements.user_phone.value);
// };

// contactFormEl.addEventListener('submit', onContactFromElSubmit);
