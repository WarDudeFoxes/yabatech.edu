import { portal } from "./Data/portal-data.js";
import { homeSearch } from "./utils/home-search.js";

homeSearch();

export let portalHTML = '';
portal.forEach(page => {
  portalHTML += 
  `
    <div class="portal-container">
      <div class="portal-content-container">
        <div class="portal-type">${page.name}</div>
        <div class="portal-description">
         ${page.description}
        </div>
        <div class="portal-link-button">
          <a href="${page.link}">Go to Portal</a>
        </div>
      </div>
    </div>
  `;
});

const portalDisplay = document.querySelector('.js-portal-display');
portalDisplay.innerHTML = portalHTML;