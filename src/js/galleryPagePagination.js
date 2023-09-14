// https://unsplash.com/
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { UnsplashAPI } from './unsplash-api';
import { createGalleryCards } from './templates/gallery-cards';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const unsplashAPI = new UnsplashAPI();

const appendRandomPhotos = async () => {
  try {
    const { data } = await unsplashAPI.fetchRandomPhotos();

    galleryEl.innerHTML = createGalleryCards(data);
  } catch (err) {
    console.log(err);
  }
};

appendRandomPhotos();

const onSearchFormElSubmit = async event => {
  event.preventDefault();

  unsplashAPI.query = event.target.elements.user_search_query.value.trim();
  unsplashAPI.page = 1;

  if (unsplashAPI.query === '') {
    alert('Введіть слово для пошуку');

    return;
  }

  try {
    const { data } = await unsplashAPI.fetchPhotosByQuery();

    if (data.total_pages === 0) {
      alert('Некоректне слово для пошуку');

      event.target.reset();

      galleryEl.innerHTML = '';

      return;
    }

    if (data.total_pages === 1) {
      galleryEl.innerHTML = createGalleryCards(data.results);

      return;
    }

    galleryEl.innerHTML = createGalleryCards(data.results);

    const paginationOptions = {
      totalItems: data.total,
      itemsPerPage: unsplashAPI.per_page,
      visiblePages: 10,
      page: 1,
    };

    const pagination = new Pagination('pagination', paginationOptions);

    pagination.on('afterMove', async event => {
      unsplashAPI.page = event.page;

      try {
        const { data } = await unsplashAPI.fetchPhotosByQuery();

        galleryEl.innerHTML = createGalleryCards(data.results);
      } catch (err) {
        console.log(err);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormElSubmit);
