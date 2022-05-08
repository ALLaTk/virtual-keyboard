import keyData from './keyData.js';
import { lang } from './changeLanguage.js';

const changeShift = () => {
  const rows = [...document.querySelectorAll('.row')];
  const shiftLeft = document.querySelector('.key_leftshift');
  const shiftRight = document.querySelector('.key_rightshift');
  const caps = document.querySelector('.key_capslock');
  document.addEventListener('mousedown', () => {
    if (shiftLeft.classList.contains('shift') || shiftRight.classList.contains('shift')) {
      for (let i = 0; i < keyData.length; i += 1) {
        for (let j = 0; j < rows[i].children.length; j += 1) {
          if (keyData[i][j].shift !== undefined) {
            if (caps.classList.contains('capslk') && rows[i].children[j].textContent.length === 1) {
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
          if (caps.classList.contains('capslk') && rows[i].children[j].textContent.length === 1) {
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
            if (caps.classList.contains('capslk') && rows[i].children[j].textContent.length === 1) {
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
          if (caps.classList.contains('capslk') && rows[i].children[j].textContent.length === 1) {
            rows[i].children[j].textContent = keyData[i][j].key[lang].toUpperCase();
          } else rows[i].children[j].textContent = keyData[i][j].key[lang];
        }
      }
    }
  });
};

export default changeShift;
