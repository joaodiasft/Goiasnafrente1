import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';

import { createHeader } from './components/Header.js';
import { createFooter } from './components/Footer.js';
import { createHomePage } from './pages/home.js';
import { createSportsPage } from './pages/sports.js';
import { createCulturePage } from './pages/culture.js';
import { createEconomyPage } from './pages/economy.js';
import { createPoliticsPage } from './pages/politics.js';
import { createGeneralNewsPage } from './pages/general.js';
import { createInstagramPage } from './pages/instagram.js';
import { initRouter } from './router.js';
import { handleBackToTop, scrollToTop } from './utils/navigation.js';

function loadPage(page) {
  const header = createHeader();
  const footer = createFooter();
  let content;

  switch (page) {
    case 'home':
      content = createHomePage();
      break;
    case 'sports':
      content = createSportsPage();
      break;
    case 'culture':
      content = createCulturePage();
      break;
    case 'economy':
      content = createEconomyPage();
      break;
    case 'politics':
      content = createPoliticsPage();
      break;
    case 'general':
      content = createGeneralNewsPage();
      break;
    case 'instagram':
      content = createInstagramPage();
      break;
    default:
      content = createHomePage();
  }

  document.querySelector('#app').innerHTML = `
    ${header}
    ${content}
    ${footer}
    <button class="back-to-top btn btn-success rounded-circle p-3 shadow" title="Voltar ao topo">
      <i class="bi bi-arrow-up"></i>
    </button>
  `;

  // Initialize components
  handleBackToTop();
  scrollToTop();

  // Initialize Bootstrap tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

window.loadPage = loadPage;
initRouter();