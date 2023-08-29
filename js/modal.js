const modalOpenBtnEl = document.querySelector('.js-modal-open');
const modalCloseBtnEl = document.querySelector('.js-modal-close');
const backdropEl = document.querySelector('.js-backdrop');

const closeModal = () => {
  backdropEl.classList.remove('is-open');

  document.removeEventListener('keydown', onDocumentKeyDown);
  modalCloseBtnEl.removeEventListener('click', onModalCloseBtnElClick);
  backdropEl.removeEventListener('click', onBackdropElClick);
};

const onModalOpenBtnElClick = event => {
  backdropEl.classList.add('is-open');

  document.addEventListener('keydown', onDocumentKeyDown);
  modalCloseBtnEl.addEventListener('click', onModalCloseBtnElClick);
  backdropEl.addEventListener('click', onBackdropElClick);
};

const onModalCloseBtnElClick = event => {
  closeModal();
};

const onDocumentKeyDown = event => {
  if (event.code === 'Escape') {
    closeModal();
  }
};

const onBackdropElClick = event => {
  if (event.currentTarget !== event.target) {
    return;
  }

  closeModal();
};

modalOpenBtnEl.addEventListener('click', onModalOpenBtnElClick);
