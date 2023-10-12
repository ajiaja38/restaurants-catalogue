/* eslint-disable linebreak-style */
class SkipLink extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <a href = "" class="skip-link">Menuju Konten</a>
    `;
  }
}
customElements.define('skip-link', SkipLink);
