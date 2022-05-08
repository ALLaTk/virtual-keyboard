import keyData from './keyData.js';

export let lang;

const changeLanguage = () => {
  const rows = [...document.querySelectorAll('.row')];
  const caps = document.querySelector('.key_capslock');

  document.addEventListener('keydown', (el) => {
    if (el.altKey && el.ctrlKey) {
      if (lang === 'en') {
        lang = 'ru';
      } else lang = 'en';
      for (let i = 0; i < keyData.length; i += 1) {
        for (let j = 0; j < rows[i].children.length; j += 1) {
          if (lang === 'ru') {
            if (caps.classList.contains('capslk') && rows[i].children[j].textContent.length === 1) {
              rows[i].children[j].textContent = keyData[i][j].key.ru.toUpperCase();
            } else rows[i].children[j].textContent = keyData[i][j].key.ru;
          }
          if (lang === 'en') {
            if (caps.classList.contains('capslk') && rows[i].children[j].textContent.length === 1) {
              rows[i].children[j].textContent = keyData[i][j].key.en.toUpperCase();
            } else rows[i].children[j].textContent = keyData[i][j].key.en;
          }
        }
      }
    }
  });
};

export default changeLanguage;
