const palletEl = document.querySelector('.js-pallet');
const palletItemEl = document.querySelectorAll('[data-pallet-item]');

const randomColor = () => {
  return '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
};

const paintElements = () => {
  palletItemEl.forEach(element => {
    const color = randomColor();

    element.style.backgroundColor = color;
    element.dataset.bgColor = color;
  });
};

paintElements();

palletEl.addEventListener('click', event => {
  if (event.target.nodeName !== 'LI') {
    return;
  }

  const { target: palletItemEl } = event;

  const bgColor = palletItemEl.dataset.bgColor;

  const outputColorEl = palletItemEl.querySelector('.js-pallet__item-color');

  outputColorEl.textContent = bgColor;
});
