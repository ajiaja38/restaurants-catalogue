/* eslint-disable linebreak-style */
class AsideContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <div class="contact-me">
      <header>
          <h4 tabindex="0" >Contact Me</h4>
      </header>
      <form action="">
          <input type="text" name="yourname" class="input-area" placeholder="Yourname" required>
          <input type="email" name="email" class="input-area" placeholder="Email" required>
          <input type="text" name="telephone" class="input-area" placeholder="Telephone" required>
          <textarea name="text area" aria-label="Pesan Anda" class="input-area area-messages" placeholder="Type Your Messages"></textarea>
          <button class="input-area submit" aria-label="input button" type="submit">Send</button>
      </form>
      </div>
      <div class="profile">
          <header>
              <h4 tabindex="0">Profile Owner</h4>
          </header>
          <div class="biodata" tabindex="0">
              <img src="./images/avatar/aji.png" alt="Owner Avatar">
              <h5>M Aji Perdana</h5>
              <p>Moslem</p>
              <p>Lampung | Indonesia</p>
              <p>24 September 2001 M | 07 Rajab 1422 H</p><br>
              <p><b>Addicted To:</b></p>
              <p>Front-end Dev | Back-end Dev | Photograpy</p>
              <p>Travelling | Riding | Poetry | Books | And All About Woman...</p><br>
              <p><b>My Social Media:</b></p>
              <div class="iconLink">
                  <a class="github" href="https://github.com/AjiPerdana38" aria-label="Link Github Owner">
                      <i class="fa-brands fa-square-github"></i>
                  </a>
                  <a class="instagram" href="https://www.instagram.com/tromolsupraa/?hl=id" aria-label="Link Instagram Owner">
                      <i class="fa-brands fa-square-instagram"></i>
                  </a>
                  <a class="linkedin" href="https://www.linkedin.com/in/m-aji-perdana-3807071bb/" aria-label="Link linkedin Owner">
                      <i class="fa-brands fa-linkedin"></i>
                  </a>
              </div>
          </div>
      </div>
    `;
  }
}
customElements.define('aside-content', AsideContent);
