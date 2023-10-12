/* eslint-disable linebreak-style */
class NavbarItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
        <img src="./images/favicons/kenyangin2.png" tabindex="0" alt="Logo web KenyanIN">
        <h1>KenyangIN</h1>

        <button id="hamburger" aria-label="Hamburger Button" class="hamburger-icon">
        <span class="hamburger-lines"></span>
        <span class="hamburger-lines"></span>
        <span class="hamburger-lines"></span>
        </button>

        <nav id="drawer">
        <ul class="nav-list">
            <li class="nav-item"><a href="#/home">Home</a></li>
            <li class="nav-item"><a href="#/like">Favorite</a></li>
            <li class="nav-item"><a href="https://github.com/AjiPerdana38">About Us</a></li>
        </ul>
        </nav>
    `;
  }
}
customElements.define('navbar-item', NavbarItem);
