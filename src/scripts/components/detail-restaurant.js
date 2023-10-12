class DetailRestaurant extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <div id="restaurant-detail"></div>
    `;
  }
}

customElements.define('detail-restaurant', DetailRestaurant);
