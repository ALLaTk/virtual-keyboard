import createHead from './js/header.js';
import createTextarea from './js/textarea.js';
import createKeyboard from './js/keyBoard.js';

window.onload = () => {
  createHead();
  const text = createTextarea();
  createKeyboard(text);
};
