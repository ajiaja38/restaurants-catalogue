import CONFIG from '../../global/config';

const { BASE_IMAGE_URL } = CONFIG;

const createItemReviewerCustomer = (review) => /* html */ `
  <div class="item-reviewer">
  <i class="fa-solid fa-circle-user avatar-reviewer"></i>
  <div class="user-reviewer">
    <p tabindex="0" aria-label="${review.name}">${review.name}</p>
    <p tabindex="0" aria-label="${review.date}">${review.date}</p>
    <p tabindex="0" aria-label="${review.review}">${review.review}</p>
  </div>
  </div>
`;

const createDetailRestaurantTemplate = (restaurant) => {
  const {
    name,
    description,
    city,
    address,
    pictureId,
    rating,
  } = restaurant;

  return /* html */ `
    <h2 class="restaurant-title" id="restaurant-title" tabindex="0" aria-label="${name}">${name}</h2>
    <div class="information-detail-section">
      <img class="restaurant-detail-image" tabindex="0" src="${BASE_IMAGE_URL + pictureId}" alt="${name}">
      <div class="restaurant-information">
        <h3>Alamat</h3>
        <p tabindex="0" aria-label="Alamat kota"><i class="fa-sharp fa-solid fa-location-dot"></i> Kota ${city}, ${address}</p>
        <h3>Rating</h3>
        <p tabindex="0" aria-label="rating bintang ${rating}"><i class="fa-regular fa-star"></i> ${rating}</p>
        <h3>Makanan</h3>
        <p tabindex="0" aria-label="Daftar Makanan">${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
        <h3>Minuman</h3>
        <p tabindex="0" aria-label="Daftar Minuman">${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</p>
      </div>
    </div>
    <div class="description">
      <h3>Deskripsi</h3>
      <p tabindex="0" aria-label="Deskripsi">${description}</p>
    </div>
    <div class="category">
      <h3>Kategori</h3>
      <div>${restaurant.categories.map((category) => /* html */`
        <p tabindex="0" aria-label="Kategoti Restoran" class="category-item">Restoran ${category.name}</p>
      `).join('')}</div>
    </div>
    <div class="review-customer">
      <h3 tabindex="0">Komentar</h3>
      <form id="add-review-form">
        <label for="name">Nama</label>
        <input type="text" name="nama kamu" placeholder="Nama kamu" id="input-name" class="input">
        <label for="review">Review dari Kamu</label>
        <textarea type="text" name="review dari kamu" placeholder="Review dari kamu" id="input-textArea" class="input area"></textarea>
        <button class="submit" aria-label="kirim komentar">Komentar</button>
      </form>
      <div class="list-review">
        ${restaurant.customerReviews.map((review) => createItemReviewerCustomer(review)).join('')}
      </div>
    </div>
  `;
};

const createLikeButtonTemplate = () => /* html */ `
  <button aria-label="Sukai Restoran ini" id="likeButton" class="like">
  <i class="fa-regular fa-thumbs-up" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => /* html */`
  <button aria-label="Batal Sukai Restoran ini" id="likeButton" class="like">
  <i class="fa-solid fa-thumbs-up" aria-hidden="true"></i>
  </button>
`;

export {
  createDetailRestaurantTemplate,
  createItemReviewerCustomer,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
