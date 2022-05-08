import createHead from './js/header';
import createTextarea from './js/textarea';
import createKeyboard from './js/keyBoard';
import changeUppercase from './js/changeUppercase';
import changeLanguage from './js/changeLanguage';

createHead();
const text = createTextarea();
createKeyboard(text);
changeUppercase();
changeLanguage();
