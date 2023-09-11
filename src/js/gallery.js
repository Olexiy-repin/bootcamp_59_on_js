// https://unsplash.com/
import { UnsplashAPI } from './unsplash-api';
import { createGalleryCards } from './templates/gallery-cards';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loadMoreBtnEL = document.querySelector('.js-load-more');

const unsplashAPI = new UnsplashAPI();

const onSearchFormElSubmit = event => {
  event.preventDefault();

  unsplashAPI.query = event.target.elements.user_search_query.value.trim();
  unsplashAPI.page = 1;

  if (unsplashAPI.query === '') {
    alert('Введіть слово для пошуку');

    return;
  }

  unsplashAPI
    .fetchPhotosByQuery()
    .then(data => {
      if (data.total_pages === 0) {
        alert('Некоректне слово для пошуку');

        event.target.reset();

        galleryEl.innerHTML = '';

        loadMoreBtnEL.classList.add('is-hidden');

        return;
      }

      if (data.total_pages === 1) {
        galleryEl.innerHTML = createGalleryCards(data.results);
        loadMoreBtnEL.classList.add('is-hidden');

        return;
      }

      galleryEl.innerHTML = createGalleryCards(data.results);

      loadMoreBtnEL.classList.remove('is-hidden');
    })
    .catch(err => {
      console.log(err);
    });
};

const onLoadMoreBtnElClick = event => {
  unsplashAPI.page += 1;

  unsplashAPI
    .fetchPhotosByQuery()
    .then(data => {
      galleryEl.insertAdjacentHTML(
        'beforeend',
        createGalleryCards(data.results)
      );

      if (unsplashAPI.page === data.total_pages) {
        loadMoreBtnEL.classList.add('is-hidden');
      }
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormElSubmit);
loadMoreBtnEL.addEventListener('click', onLoadMoreBtnElClick);
