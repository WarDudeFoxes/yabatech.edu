import {entryData} from './Data/entry-data.js';
import { entrySearch } from './utils/entry-search.js';

entrySearch();

let entryHTML = '';
entryData.forEach(element => {
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
});

const content = document.querySelector('.content');
content.innerHTML = entryHTML;

const searchInput = document.querySelector('.search-value');

document.querySelectorAll('.hide').forEach(element => {
  element.addEventListener('click', () => {
    searchInput.style.width = '50%';
  });
});

searchInput.addEventListener('click', () => {
  searchInput.style.width = '100%';
});