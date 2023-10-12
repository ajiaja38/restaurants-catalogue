/* eslint-disable linebreak-style */
class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <h3 tabindex="0">Copyright © 2022 - Kenyangin <span class="heart-icon"><i class="fa-solid fa-heart"></i></span> | Submission Dicoding</h3>
    `;
  }
}
customElements.define('footer-bar', FooterBar);
