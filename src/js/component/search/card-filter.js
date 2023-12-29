import { searchForm, cardSelectedName } from './card-elements';

const searchFilterLength = searchForm.querySelector('[data-js-total-filtered-events]');
const searchTotalEvents = searchForm.querySelector('[data-js-total-events]');
const searchFilterState = {};
searchFilterState.total = parseInt(searchFilterLength.innerHTML, 10);
searchFilterLength.innerHTML = searchFilterState.total;

// Updates the events total
export const updateTotalEvents = (total) => {
  searchTotalEvents.innerHTML = total;
};

// Updates the filter total
export const filterCounter = (card) => {
  if (card.classList.contains(cardSelectedName)) {
    searchFilterState.total += 1;
    searchFilterLength.innerHTML = searchFilterState.total;
  } else {
    searchFilterState.total -= 1;
    searchFilterLength.innerHTML = searchFilterState.total;
  }
};
export default updateTotalEvents;
