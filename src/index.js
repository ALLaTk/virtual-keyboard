import createHead from './js/header.js';
import createTextarea from './js/textarea.js';
import createKeyboard from './js/keyBoard.js';
import changeСase from './js/changeCase.js';

createHead();
const text = createTextarea();
createKeyboard(text);
changeСase();
