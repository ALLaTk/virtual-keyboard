import Control from './control.js';
import keyData from './keyData.js';

class KeyBoard extends Control {
  constructor(parent, text) {
    super(parent, 'div', 'keyboard');
    this.textarea = text;

    for (let i = 0; i < keyData.length; i += 1) {
      this.row = new Control(this.element, 'div', 'row');

      keyData[i].forEach((el) => {
        const { element } = new Control(this.row.element, 'button', `${el.class}`);

        element.textContent = `${el.key.en}`;

        element.addEventListener('click', (event) => {
          let cursor = this.textarea.element.selectionStart;
          const str = this.textarea.element;
          const strLeft = this.textarea.element.value.slice(0, cursor);
          const strRight = this.textarea.element.value.slice(cursor);
          const { textContent } = event.target;
          this.textarea.element.focus();

          if (textContent.length === 1) {
            if (cursor === str.value.length) {
              this.textarea.element.value += textContent;
            } else {
              cursor += 1;
              this.textarea.element.value = `${strLeft}${textContent}${strRight}`;
              str.setSelectionRange(cursor, cursor);
            }
          }
          if (textContent === 'Enter') {
            cursor += 1;
            this.textarea.element.value = `${strLeft}\n${strRight}`;
            str.setSelectionRange(cursor, cursor);
          }

          if (textContent === 'Backspace') {
            cursor -= 1;
            this.textarea.element.value = `${strLeft.slice(0, -1)}${strRight}`;
            str.setSelectionRange(cursor, cursor);
          }

          if (textContent === 'Del') {
            this.textarea.element.value = `${strLeft}${strRight.slice(1)}`;
            str.setSelectionRange(cursor, cursor);
          }
        });
        element.addEventListener('click', (event) => {
          if (event.target.classList.contains('key_capslock')) {
            element.classList.toggle('capslk');
          }
        });
        document.addEventListener('keydown', (event) => {
          if (event.code === 'CapsLock' && el.code === 'CapsLock') {
            element.classList.toggle('capslk');
          }
        });

        document.addEventListener('keydown', (event) => {
          this.textarea.element.focus();
          if (event.code === el.code) {
            element.classList.add('active');
          }
        });
        document.addEventListener('keyup', (event) => {
          if (event.code === el.code) {
            element.classList.remove('active');
          }
        });
      });
    }
  }
}

const createKeyboard = (text) => new KeyBoard(document.body, text);

export default createKeyboard;
