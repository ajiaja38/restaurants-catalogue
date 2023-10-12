/* eslint-disable linebreak-style */
class HeroImage extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <h2 class="hero-title">Solusi Gaul Saat Laper Yang Ga Banget.</h2>
      <p>Cari tempat makan dan nongkrong favoritmu dilokasi terdekat yang Estetik, Edgy dan Ga nguras Duit.</p>
    `;
  }
}
customElements.define('hero-image', HeroImage);
