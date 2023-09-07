import productsDb from '../json/productsDb.json';
import localStorageService from './localStorageService';
import { createCartProduct } from './templates/productCartCard';

const productsListEl = document.querySelector('.js-products');

const appendCartItems = () => {
  const productsIdentificators = localStorageService.load('productsToCart');

  if (productsIdentificators === undefined) {
    return;
  }

  const productsToCart = productsDb.filter(productInfo => {
    return productsIdentificators.includes(String(productInfo.id));
  });

  const productsToCartTemplate = productsToCart
    .map(productInfo => createCartProduct(productInfo))
    .join('');

  productsListEl.innerHTML = productsToCartTemplate;
};

appendCartItems();
