import CatalogueRestaurant from '../view/pages/catalogue';
import DetailRestaurant from '../view/pages/detail';
import Like from '../view/pages/like';

const routes = {
  '/': CatalogueRestaurant,
  '/home': CatalogueRestaurant,
  '/detail/:id': DetailRestaurant,
  '/like': Like,
};

export default routes;
