import createHead from './js/header.js';
import createTextarea from './js/textarea.js';
import createKeyboard from './js/keyBoard.js';
import changeUppercase from './js/changeUppercase.js';
import changeLanguage from './js/changeLanguage.js';

createHead();
const text = createTextarea();
createKeyboard(text);
changeUppercase();
changeLanguage();
