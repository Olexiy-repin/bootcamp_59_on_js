/*
 * Основи подій. Створення та видалення слухачів. Об'єкт події
 */

/*
 ?  - Іменування колбеків для слухачів
 ?  - handle*: handleSubjectEvent
 ?  - *Handler: subjectEventHandler
 ?  - on*: onSubjectEvent
 */

// https://picsum.photos/200/300

const swapBtnEl = document.querySelector('.js-swap-btn');
const removeEventListenerBtnEl = document.querySelector('.js-remove-listener');
const imgEl = document.querySelector('.js-img');

const onSwapBtnElClick = event => {
  console.log(event);

  imgEl.src = 'https://picsum.photos/200/300';
  imgEl.alt = 'Random image';
};

swapBtnEl.addEventListener('click', onSwapBtnElClick);

removeEventListenerBtnEl.addEventListener('click', event => {
  swapBtnEl.removeEventListener('click', onSwapBtnElClick);
});
