import RestaurantSource from '../../data/restaurant-source-api';
import '../../components/catalogue-list';

const CatalogueRestaurant = {
  async render() {
    return /* html */`
    <div class="title-content-heading">
      <h3 class="title-content-heading-label">Daftar Restoran</h2>
      <catalogue-list></catalogue-list>
    </div>

    <aside>
      <div class="title-content-heading">
        <h3 class="title-content-heading-label">Owner Kenyangin</h2>
      </div>
      <aside-content></aside-content>
    </aside>
    `;
  },

  async afterRender() {
    const catalogueRestaurantResourceApi = await RestaurantSource.listRestaurant();
    const catalogueListElement = document.querySelector('catalogue-list');
    const skipLink = document.querySelector('skip-link>a');
    const hero = document.querySelector('hero-image');

    skipLink.setAttribute('href', '#content');
    hero.style.display = 'flex';

    const restaurantList = (catalogueList) => {
      catalogueListElement.restaurants = catalogueList;
    };

    restaurantList(catalogueRestaurantResourceApi);
  },
};

export default CatalogueRestaurant;
