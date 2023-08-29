const messagesWrapperEl = document.querySelector('.js-messages-wrapper');

const onMessageCloseBtnElClick = event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const { target: messageCloseBtnEL } = event;

  const messageEl = messageCloseBtnEL.closest('.js-message');

  messageEl.remove();
};

messagesWrapperEl.addEventListener('click', onMessageCloseBtnElClick);
