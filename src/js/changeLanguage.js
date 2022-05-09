import keyData from './keyData.js';
import { data } from './getLocalStorage.js';

const changeLanguage = () => {
  const rows = [...document.querySelectorAll('.row')];
  const capslock = document.querySelector('.key_capslock');

  document.addEventListener('keydown', (el) => {
    if (el.altKey && el.ctrlKey) {
      if (data.lang === 'en') {
        data.lang = 'ru';
      } else {
        data.lang = 'en';
      }
      for (let i = 0; i < keyData.length; i += 1) {
        for (let j = 0; j < rows[i].children.length; j += 1) {
          if (data.lang === 'ru') {
            if (capslock.classList.contains('capslk') && rows[i].children[j].textContent.length === 1) {
              rows[i].children[j].textContent = keyData[i][j].key.ru.toUpperCase();
            } else rows[i].children[j].textContent = keyData[i][j].key.ru;
          }
          if (data.lang === 'en') {
            if (capslock.classList.contains('capslk') && rows[i].children[j].textContent.length === 1) {
              rows[i].children[j].textContent = keyData[i][j].key.en.toUpperCase();
            } else rows[i].children[j].textContent = keyData[i][j].key.en;
          }
        }
      }
    }
  });
};

export default changeLanguage;
