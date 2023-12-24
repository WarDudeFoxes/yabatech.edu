import { portal } from "../Data/portal-data.js";

export function homeSearch() {
  const homeSearch = document.querySelector('.home-page-search');
    
  homeSearch.addEventListener('keyup', () => {
  
    let searchValue = (homeSearch.value).toLowerCase()
    let resultHTML = '';

    portal.forEach(element => {
      element.keyWords.forEach(word => {
        if (word.toLowerCase().includes(searchValue)) {
        
          resultHTML +=
          `
            <div class="portal-container">
              <div class="portal-content-container">
                <div class="portal-type">${element.name}</div>
                <div class="portal-description">
                ${element.description}
                </div>
                <div class="portal-link-button">
                  <a href="${element.link}">Go to Portal</a>
                </div>
              </div>
            </div>
          `;
          document.querySelector('.js-portal-display').innerHTML = resultHTML;
         };
      });  
    });
  });
};