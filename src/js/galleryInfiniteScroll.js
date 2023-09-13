// https://unsplash.com/
import { UnsplashAPI } from './unsplash-api';
import { createGalleryCards } from './templates/gallery-cards';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const intersectingEl = document.querySelector('.js-intersecting-element');

const unsplashAPI = new UnsplashAPI();

const observerOptions = {
  root: null,
  rootMargin: '0px 0px 600px 0px',
  threshold: 1.0,
};

const onIntersectingElIntersectingViewport = async entries => {
  if (!entries[0].isIntersecting) {
    return;
  }

  unsplashAPI.page += 1;

  try {
    const { data } = await unsplashAPI.fetchPhotosByQuery();

    galleryEl.insertAdjacentHTML('beforeend', createGalleryCards(data.results));

    if (unsplashAPI.page === data.total_pages) {
      observer.unobserve(intersectingEl);
    }
  } catch (err) {
    console.log(err);
  }
};

const observer = new IntersectionObserver(
  onIntersectingElIntersectingViewport,
  observerOptions
);

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

      observer.unobserve(intersectingEl);

      return;
    }

    if (data.total_pages === 1) {
      galleryEl.innerHTML = createGalleryCards(data.results);

      observer.unobserve(intersectingEl);

      return;
    }

    galleryEl.innerHTML = createGalleryCards(data.results);

    setTimeout(() => {
      observer.observe(intersectingEl);
    }, 300);
  } catch (err) {
    console.log(err);
  }
};

const onLoadMoreBtnElClick = async event => {
  unsplashAPI.page += 1;

  try {
    const { data } = await unsplashAPI.fetchPhotosByQuery();

    galleryEl.insertAdjacentHTML('beforeend', createGalleryCards(data.results));

    if (unsplashAPI.page === data.total_pages) {
      loadMoreBtnEL.classList.add('is-hidden');
    }
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormElSubmit);
