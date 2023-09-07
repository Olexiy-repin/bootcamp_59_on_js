/* 
<li class="products-item">
      <img src="" alt="" class="products-img" />
      <div class="products-content">
        <h3 class="products-title"></h3>
        <p class="products-description"></p>
        <p class="products-rating"></p>
        <span class="products-price"></span>
        <button class="products-add-to-cart-btn" type="button"></button>
      </div>
    </li> 
*/

export const createProductCard = productInfo => {
  const { id, thumbnail, title, description, rating, price } = productInfo;

  return `
    <li class="products-item">
      <img src="${thumbnail}" alt="${title}" class="products-img" />
      <div class="products-content">
        <h3 class="products-title">${title}</h3>
        <p class="products-description">${description}</p>
        <p class="products-rating">rating: ${rating}</p>
        <div class="products-bottom-content">
        <p class="products-price">price: ${price}$</p>
        <button class="products-add-to-cart-btn" type="button" data-product-id="${id}">Add to cart</button>
        </div>
      </div>
    </li> 
  `;
};
