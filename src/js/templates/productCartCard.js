/* <li class="products-item">
  <img src="" alt="" class="products-img" />
  <div class="products-content">
    <h3 class="products-title"></h3>
    <p class="products-description"></p>
  </div>
</li>; */

export const createCartProduct = productInfo => {
  const { thumbnail, title, description } = productInfo;

  return `
  <li class="products-item">
    <img src="${thumbnail}" alt="${title}" class="products-img" />
    <div class="products-content">
      <h3 class="products-title">${title}</h3>
      <p class="products-description">${description}</p>
    </div>
  </li>
  `;
};
