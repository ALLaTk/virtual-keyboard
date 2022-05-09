import keyData from './keyData.js';

export const data = {
  lang: null,
};

if (JSON.parse(localStorage.getItem('lang')).lang === 'ru') {
  data.lang = 'ru';
} else {
  data.lang = 'en';
}

export const getLocalStorage = () => {
  const rows = [...document.querySelectorAll('.row')];
  if (localStorage.getItem('lang')) {
    const { lang } = JSON.parse(localStorage.getItem('lang'));
    if (lang === 'en') {
      for (let i = 0; i < keyData.length; i += 1) {
        for (let j = 0; j < rows[i].children.length; j += 1) {
          rows[i].children[j].textContent = keyData[i][j].key.en;
        }
      }
    } else {
      for (let i = 0; i < keyData.length; i += 1) {
        for (let j = 0; j < rows[i].children.length; j += 1) {
          rows[i].children[j].textContent = keyData[i][j].key.ru;
        }
      }
    }
  }
};
window.addEventListener('load', getLocalStorage);

export const setLocalStorage = () => {
  const set = JSON.stringify({
    lang: data.lang,
  });
  localStorage.setItem('lang', set);
};
window.addEventListener('beforeunload', setLocalStorage);
