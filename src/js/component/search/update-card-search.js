import { searchForm, cardSelectedName } from './card-elements';
import { filterCounter, updateTotalEvents } from './card-filter';
import { updateForm } from './update-form';

export const updateCardSearch = () => {
  const allCards = searchForm.querySelectorAll('[data-js-event-card]');
  updateTotalEvents(allCards.length);
  const cardState = [];

  if (allCards) {
    for (const card of allCards) {
      card.addEventListener('click', () => {
        card.classList.toggle(cardSelectedName);
        const isSelected = card.dataset.jsSelected;
        filterCounter(card);
        updateForm(card, isSelected, cardState);
        if (isSelected === 'false') {
          card.dataset.jsSelected = 'true';
        } else {
          card.dataset.jsSelected = 'false';
        }
      });
    }
  }

  // TODO: Replace with a call to a server to return the search results data
  const submit = searchForm.querySelector('[data-js-search-submit]');
  if (submit) {
    const submitForm = (e) => {
      e.preventDefault();
      console.log(`You have submitted ${cardState}`);
    };
    submit.addEventListener('submit', (e) => submitForm(e));
  }
};
export default updateCardSearch;
