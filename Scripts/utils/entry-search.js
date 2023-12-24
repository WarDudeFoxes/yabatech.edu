import { entryData } from "../Data/entry-data.js";

export function entrySearch() {
  const search = document.querySelector('.search-value');

  search.addEventListener('keyup', () => {
    const searchValue = search.value.toLowerCase();

    let entryHTML = '';
    entryData.forEach(element => {
      element.keyWords.forEach(word => {
        if (word.toLowerCase().includes(searchValue)) {
          entryHTML += 
          `
            <div class="light-row">
              <div class="course">
                ${(element.course).toUpperCase()}
              </div>
              <div class="olevel compulsory">
                ${(element['olevel compulsory']).toUpperCase()}
              </div>
              <div class="olevel-elective">
                ${(element['olevel-elective']).toUpperCase()}
              </div>
            </div>
          `;
        };
      });
    });
    document.querySelector('.content').innerHTML = entryHTML;
  });
};