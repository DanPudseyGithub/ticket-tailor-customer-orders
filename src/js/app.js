// CSS
import '../scss/app.scss';

// JS
import { searchForm } from './component/search/card-elements.js';
import { updateCardSearch } from './component/search/update-card-search.js';

document.addEventListener('DOMContentLoaded', () => {
  if (searchForm) updateCardSearch();
});
