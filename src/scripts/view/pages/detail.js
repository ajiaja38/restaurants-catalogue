import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source-api';
import '../../components/detail-restaurant';
import { createDetailRestaurantTemplate } from '../templates/template-creator';
import addReview from '../../utils/addReview-initiator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const DetailRestaurant = {
  async render() {
    return /* html */`
      <detail-restaurant></detail-restaurant>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantDetailContainer = document.querySelector('#restaurant-detail');
    const skipLink = document.querySelector('skip-link>a');
    const hero = document.querySelector('hero-image');

    skipLink.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#restaurant-title').focus();
    });

    hero.style.display = 'none';
    restaurantDetailContainer.innerHTML = createDetailRestaurantTemplate(restaurant);

    const addReviewForm = document.querySelector('#add-review-form');
    const name = document.querySelector('#input-name');
    const review = document.querySelector('#input-textArea');

    addReviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      addReview({
        id: url.id,
        name: name.value,
        review: review.value,
      });

      addReviewForm.reset();
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default DetailRestaurant;
