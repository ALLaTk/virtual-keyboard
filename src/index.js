import createHead from './js/header.js';
import createTextarea from './js/textarea.js';
import createKeyboard from './js/keyBoard.js';
import changeUppercase from './js/changeUppercase.js';

import keyData from './js/keyData.js';

createHead();
const text = createTextarea();
createKeyboard(text);
changeUppercase();

let lang;

if (localStorage.getItem('lang') === 'ru') {
  lang = 'ru';
} else {
  lang = 'en';
}

const getLocalStorage = () => {
  const rows = [...document.querySelectorAll('.row')];
  if (localStorage.getItem('lang')) {
    const data = localStorage.getItem('lang');
    if (data === 'en') {
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

const setLocalStorage = () => {
  localStorage.setItem('lang', lang);
};
window.addEventListener('beforeunload', setLocalStorage);

const changeLanguage = () => {
  const rows = [...document.querySelectorAll('.row')];
  const capslock = document.querySelector('.key_capslock');

  document.addEventListener('keydown', (el) => {
    if (el.altKey && el.ctrlKey) {
      if (lang === 'en') {
        lang = 'ru';
      } else {
        lang = 'en';
      }
      for (let i = 0; i < keyData.length; i += 1) {
        for (let j = 0; j < rows[i].children.length; j += 1) {
          if (lang === 'ru') {
            if (capslock.classList.contains('capslk') && rows[i].children[j].textContent.length === 1) {
              rows[i].children[j].textContent = keyData[i][j].key.ru.toUpperCase();
            } else rows[i].children[j].textContent = keyData[i][j].key.ru;
          }
          if (lang === 'en') {
            if (capslock.classList.contains('capslk') && rows[i].children[j].textContent.length === 1) {
              rows[i].children[j].textContent = keyData[i][j].key.en.toUpperCase();
            } else rows[i].children[j].textContent = keyData[i][j].key.en;
          }
        }
      }
    }
  });
};

changeLanguage();

const changeShift = () => {
  const rows = [...document.querySelectorAll('.row')];
  const shiftLeft = document.querySelector('.key_leftshift');
  const shiftRight = document.querySelector('.key_rightshift');
  const capslock = document.querySelector('.key_capslock');
  document.addEventListener('mousedown', () => {
    if (shiftLeft.classList.contains('shift') || shiftRight.classList.contains('shift')) {
      for (let i = 0; i < keyData.length; i += 1) {
        for (let j = 0; j < rows[i].children.length; j += 1) {
          if (keyData[i][j].shift !== undefined) {
            if (capslock.classList.contains('capslk') && rows[i].children[j].textContent.length === 1) {
              rows[i].children[j].textContent = keyData[i][j].shift[lang].toLowerCase();
            } else rows[i].children[j].textContent = keyData[i][j].shift[lang];
          }
        }
      }
    }
  });

  document.addEventListener('mouseup', () => {
    if (!shiftLeft.classList.contains('shift') || !shiftRight.classList.contains('shift')) {
      for (let i = 0; i < keyData.length; i += 1) {
        for (let j = 0; j < rows[i].children.length; j += 1) {
          if (capslock.classList.contains('capslk') && rows[i].children[j].textContent.length === 1) {
            rows[i].children[j].textContent = keyData[i][j].key[lang].toLowerCase();
          } else rows[i].children[j].textContent = keyData[i][j].key[lang];
        }
      }
    }
  });

  document.addEventListener('keydown', (el) => {
    if (el.shiftKey) {
      for (let i = 0; i < keyData.length; i += 1) {
        for (let j = 0; j < rows[i].children.length; j += 1) {
          if (keyData[i][j].shift !== undefined) {
            if (capslock.classList.contains('capslk') && rows[i].children[j].textContent.length === 1) {
              rows[i].children[j].textContent = keyData[i][j].shift[lang].toLowerCase();
            } else rows[i].children[j].textContent = keyData[i][j].shift[lang];
          }
        }
      }
    }
  });
  document.addEventListener('keyup', (el) => {
    if (el.code === 'ShiftLeft' || el.code === 'ShiftRight') {
      for (let i = 0; i < keyData.length; i += 1) {
        for (let j = 0; j < rows[i].children.length; j += 1) {
          if (capslock.classList.contains('capslk') && rows[i].children[j].textContent.length === 1) {
            rows[i].children[j].textContent = keyData[i][j].key[lang].toUpperCase();
          } else rows[i].children[j].textContent = keyData[i][j].key[lang];
        }
      }
    }
  });
};
changeShift();
export default changeShift;
