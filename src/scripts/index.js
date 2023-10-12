import 'regenerator-runtime'; /* for async await transpile */
import '../styles/responsive.scss';
import '../styles/main.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import './components/hero-image';
import './components/navbar-item';
import './components/skip-link';
import './components/aside-content';
import './components/footer-bar';
import App from './view/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#content'),
  hero: document.querySelector('hero-image'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
