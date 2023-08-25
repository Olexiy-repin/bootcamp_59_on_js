const pictures = [
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/0/700/460',
    alt: 'laptop',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1/700/460',
    alt: 'developer',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/10/700/460',
    alt: 'forest',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/100/700/460',
    alt: 'beach',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1000/700/460',
    alt: 'mountain',
  },
];

// const titleEl = document.querySelector('.js-title');

// console.dir(titleEl);

// titleEl.textContent = 'Main <span>Title</span>';
// titleEl.innerHTML = '<a class="link">Main <span>Title</span></a>';

/*
<li class="gallery-item">
  <a href="#">
    <img src="" alt="" width="" height="">
  </a>
</li>
*/

const galleryListEl = document.querySelector('.js-gallery');

// Функція для створення карточки makeGalleryCard(cardInfo)
const makeGalleryCard = pictureInfo => {
  const { width, height, url, alt } = pictureInfo;

  return `
    <li class="gallery-item">
      <a href="#">
        <img src="${url}" alt="${alt}" width="${width}" height="${height}">
      </a>
    </li>
  `;
};

// Створення масиву рядків із елементами
const galleryCardsTemplates = pictures.map(pictureInfo => makeGalleryCard(pictureInfo));

console.log(galleryCardsTemplates.join(''));

// Вставка елементів на сторінку
// galleryListEl.innerHTML = galleryCardsTemplates.join('');
galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplates.join(''));
