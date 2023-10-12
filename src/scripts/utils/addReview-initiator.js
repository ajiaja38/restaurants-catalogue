import RestaurantSource from '../data/restaurant-source-api';
import { createItemReviewerCustomer } from '../view/templates/template-creator';

const addReview = async ({ id, name, review }) => {
  const input = {
    id,
    name,
    review,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(input),
  };

  const restaurant = await RestaurantSource.addReviewRestaurant(options);
  const renderReview = document.querySelector('.list-review');
  renderReview.innerHTML = restaurant.customerReviews.map((reviewed) => createItemReviewerCustomer(reviewed)).join('');
};

export default addReview;
