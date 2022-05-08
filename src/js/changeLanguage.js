import keyData from './keyData.js';

const changeLanguage = () => {
  const rows = [...document.querySelectorAll('.row')];
  const caps = document.querySelector('.key_capslock');

  let lang;

  document.addEventListener('keydown', (e) => {
    if (e.altKey && e.ctrlKey) {
      if (lang) {
        lang = false;
      } else lang = true;
      for (let i = 0; i < keyData.length; i += 1) {
        for (let j = 0; j < rows[i].children.length; j += 1) {
          if (lang === true) {
            if (caps.classList.contains('capslk') && rows[i].children[j].textContent.length === 1) {
              rows[i].children[j].textContent = keyData[i][j].key.ru.toUpperCase();
            } else rows[i].children[j].textContent = keyData[i][j].key.ru;
          }
          if (lang === false) {
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
