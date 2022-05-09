import keyData from './keyData.js';
import { data } from './getLocalStorage.js';

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
              rows[i].children[j].textContent = keyData[i][j].shift[data.lang].toLowerCase();
            } else rows[i].children[j].textContent = keyData[i][j].shift[data.lang];
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
            rows[i].children[j].textContent = keyData[i][j].key[data.lang].toLowerCase();
          } else rows[i].children[j].textContent = keyData[i][j].key[data.lang];
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
              rows[i].children[j].textContent = keyData[i][j].shift[data.lang].toLowerCase();
            } else rows[i].children[j].textContent = keyData[i][j].shift[data.lang];
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
            rows[i].children[j].textContent = keyData[i][j].key[data.lang].toUpperCase();
          } else rows[i].children[j].textContent = keyData[i][j].key[data.lang];
        }
      }
    }
  });
};

export default changeShift;
