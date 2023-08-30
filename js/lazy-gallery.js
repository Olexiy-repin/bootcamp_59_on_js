const galleryListEl = document.querySelector('.js-gallery');
const bannerImgEl = document.querySelector('.js-banner-img');

const onGalleryImgElClick = event => {
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const { target: galleryImgEl } = event;

  const bannerUrl = galleryImgEl.dataset.bannerUrl;

  bannerImgEl.src = bannerUrl;
};

galleryListEl.addEventListener('click', onGalleryImgElClick);

const addSrcAttrToImg = () => {
  const galleryImgEls = document.querySelectorAll('.gallery__img');

  galleryImgEls.forEach(galleryImgEl => {
    galleryImgEl.src = galleryImgEl.dataset.src;
  });
};

const createLazySizesScript = () => {
  const script = document.createElement('script');

  script.src = 'https://cdn.jsdelivr.net/npm/lazysizes@5.3.2/lazysizes.min.js';

  return script;
};

if ('loading' in HTMLImageElement.prototype) {
  console.log('Атрибут loading підтримується');
  addSrcAttrToImg();
} else {
  console.log('Атрибут loading не підтримується');
  document.body.append(createLazySizesScript());
}
