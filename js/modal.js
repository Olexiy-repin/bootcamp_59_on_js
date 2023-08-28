const modalOpenBtnEl = document.querySelector('.js-modal-open');
const modalCloseBtnEl = document.querySelector('.js-modal-close');
const backdropEl = document.querySelector('.js-backdrop');

const closeModal = () => {
  backdropEl.classList.remove('is-open');

  document.removeEventListener('keydown', onDocumentKeyDown);
  modalCloseBtnEl.removeEventListener('click', onModalCloseBtnElClick);
};

const onModalOpenBtnElClick = event => {
  backdropEl.classList.add('is-open');

  document.addEventListener('keydown', onDocumentKeyDown);
  modalCloseBtnEl.addEventListener('click', onModalCloseBtnElClick);
};

const onModalCloseBtnElClick = event => {
  closeModal();
};

const onDocumentKeyDown = event => {
  console.log(event.code);

  if (event.code === 'Escape') {
    closeModal();
  }
};

modalOpenBtnEl.addEventListener('click', onModalOpenBtnElClick);
