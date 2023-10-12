import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import '../../components/catalogue-list';

const Like = {
  async render() {
    return /* html */ `
    <div class="title-content-heading">
      <h3 class="title-content-heading-label" id="liked-content" tabindex="0">Restoran Favoritmu</h2>
      <catalogue-list></catalogue-list>
    </div>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurant();
    const catalogueListElement = document.querySelector('catalogue-list');
    const headingMarginTop = document.querySelector('.title-content-heading');
    const skipLink = document.querySelector('skip-link>a');
    const hero = document.querySelector('hero-image');

    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#liked-content').focus();
    });

    headingMarginTop.style.marginTop = '7rem';
    hero.style.display = 'none';

    const restaurantLikedList = (catalogueLikedList) => {
      catalogueListElement.restaurants = catalogueLikedList;
    };

    restaurantLikedList(restaurant);
  },
};

export default Like;
