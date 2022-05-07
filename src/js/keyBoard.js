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
          if (el.code === 'Enter') {
            cursor += 1;
            this.textarea.element.value = `${strLeft}\n${strRight}`;
            str.setSelectionRange(cursor, cursor);
          }

          if (el.code === 'Backspace') {
            cursor -= 1;
            this.textarea.element.value = `${strLeft.slice(0, -1)}${strRight}`;
            str.setSelectionRange(cursor, cursor);
          }

          if (el.code === 'Delete') {
            this.textarea.element.value = `${strLeft}${strRight.slice(1)}`;
            str.setSelectionRange(cursor, cursor);
          }

          if (el.code === 'Tab') {
            cursor += 4;
            this.textarea.element.value = `${strLeft}    ${strRight}`;
            str.setSelectionRange(cursor, cursor);
          }
        });
        element.addEventListener('click', (event) => {
          if (event.target.classList.contains('key_capslock')) {
            element.classList.toggle('capslk');
          }
        });

        document.addEventListener('keydown', (event) => {
          let cursorTab = this.textarea.element.selectionStart;

          const strTab = this.textarea.element;
          const strLeftTab = this.textarea.element.value.slice(0, cursorTab);
          const strRightTab = this.textarea.element.value.slice(cursorTab);
          if (event.code === 'Tab' && el.code === 'Tab') {
            event.preventDefault();
            cursorTab += 4;
            this.textarea.element.value = `${strLeftTab}    ${strRightTab}`;
            strTab.setSelectionRange(cursorTab, cursorTab);
          }
        });

        document.addEventListener('keydown', (event) => {
          let cursorArrow = this.textarea.element.selectionStart;

          const strArrow = this.textarea.element;
          const strLeftArrow = this.textarea.element.value.slice(0, cursorArrow);
          const strRightArrow = this.textarea.element.value.slice(cursorArrow);
          if ((event.code === 'ArrowUp' && el.code === 'ArrowUp')
             || (event.code === 'ArrowLeft' && el.code === 'ArrowLeft')
             || (event.code === 'ArrowDown' && el.code === 'ArrowDown')
             || (event.code === 'ArrowRight' && el.code === 'ArrowRight')) {
            event.preventDefault();
            cursorArrow += 1;

            this.textarea.element.value = `${strLeftArrow}${element.textContent}${strRightArrow}`;
            strArrow.setSelectionRange(cursorArrow, cursorArrow);
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
