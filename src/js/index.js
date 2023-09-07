import productsDb from '../json/productsDb.json';
import localStorageService from './localStorageService';
import { createProductCard } from './templates/productCard';

const productsListEl = document.querySelector('.js-products');

const prdoctsTemplate = productsDb
  .map(productInfo => createProductCard(productInfo))
  .join('');

productsListEl.innerHTML = prdoctsTemplate;

const productsIdentificators = [];

const onAddToCartBtnElClick = event => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const { target: addToCartBtnEl } = event;

  addToCartBtnEl.disabled = true;

  const productId = addToCartBtnEl.dataset.productId;

  productsIdentificators.push(productId);

  localStorageService.save('productsToCart', productsIdentificators);
};

productsListEl.addEventListener('click', onAddToCartBtnElClick);
