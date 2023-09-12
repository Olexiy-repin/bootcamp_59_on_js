/*
<li class="gallery__item">
    <img src="{{this.urls.regular}}" alt="{{this.alt_description}}" class="gallery-img">
</li>
*/

export const createGalleryCards = photosArr => {
  const photosTemplate = photosArr
    .map(photoInfo => {
      return `
        <li class="gallery__item">
            <img src="${photoInfo.urls.regular}" alt="${photoInfo.alt_description}" class="gallery-img">
        </li>
        `;
    })
    .join('');

  return photosTemplate;
};
