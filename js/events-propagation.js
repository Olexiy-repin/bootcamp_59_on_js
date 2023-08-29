/*
 * Поширення подій (занурення, таргетинг, спливання)
 */

const sectionEl = document.querySelector('.js-section');
const divEl = document.querySelector('.js-div');
const textEl = document.querySelector('.js-text');

sectionEl.addEventListener('click', event => {
  console.group('Click by Section!');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
  console.groupEnd();
});

divEl.addEventListener('click', event => {
  console.group('Click by Div!');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
  console.groupEnd();
});

textEl.addEventListener('click', event => {
  console.group('Click by P!');
  console.log('event.target: ', event.target);
  console.log('event.currentTarget: ', event.currentTarget);
  console.groupEnd();
});
