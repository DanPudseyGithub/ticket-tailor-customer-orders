import { searchForm } from './card-elements';
import { sanitizeInput } from '../../utility/sanitize-input';

const input = searchForm.querySelector('[data-js-event-list-input]');

// Add the comma-separated values to the input inside the form
export const updateForm = (card, isSelected, cardState) => {
  const id = sanitizeInput(card.getAttribute('id'));
  if (isSelected === 'false') {
    if (!cardState.includes(id)) {
      cardState.push(id);
    } else {
      cardState.splice(cardState.indexOf(id), 1);
    }
  } else {
    cardState.splice(cardState.indexOf(id), 1);
  }
  if (cardState.length) {
    const inputValue = cardState.join(',');
    input.value = inputValue;
  } else {
    input.value = '';
  }
};
export default updateForm;
