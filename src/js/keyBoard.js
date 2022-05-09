import Control from './control.js';
import keyData from './keyData.js';

class KeyBoard extends Control {
  constructor(parent, text) {
    super(parent, 'div', 'keyboard');
    this.textarea = text;

    for (let i = 0; i < keyData.length; i += 1) {
      this.row = new Control(this.element, 'div', 'row');

      keyData[i].forEach((el) => {
        const { element } = new Control(this.row.element, 'button', el.class);

        element.textContent = el.key.en;

        element.addEventListener('click', (event) => {
          let cursor = this.textarea.element.selectionStart;
          const cursorEnd = this.textarea.element.selectionEnd;
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
            if (cursor === cursorEnd) {
              cursor -= 1;
              this.textarea.element.value = `${strLeft.slice(0, -1)}${strRight}`;
              str.setSelectionRange(cursor, cursor);
            } else {
              this.textarea.element.value = `${strLeft}${strRight.slice(cursorEnd - cursor)}`;

              str.setSelectionRange(cursor, cursor);
            }
          }

          if (el.code === 'Delete') {
            if (cursor === cursorEnd) {
              this.textarea.element.value = `${strLeft}${strRight.slice(1)}`;
              str.setSelectionRange(cursor, cursor);
            } else {
              this.textarea.element.value = `${strLeft}${strRight.slice(cursorEnd - cursor)}`;
              str.setSelectionRange(cursor, cursor);
            }
          }

          if (el.code === 'Tab') {
            cursor += 4;
            this.textarea.element.value = `${strLeft}    ${strRight}`;
            str.setSelectionRange(cursor, cursor);
          }
          if (event.target.classList.contains('key_capslock')) {
            element.classList.toggle('capslk');
          }
        });

        element.addEventListener('mousedown', (event) => {
          if (event.target.classList.contains('key_leftshift') || event.target.classList.contains('key_rightshift')) {
            element.classList.add('shift');
          }
        });
        element.addEventListener('mouseup', (event) => {
          if (event.target.classList.contains('key_leftshift') || event.target.classList.contains('key_rightshift')) {
            element.classList.remove('shift');
          }
        });
        document.addEventListener('keydown', (event) => {
          let cursor = this.textarea.element.selectionStart;

          const str = this.textarea.element;
          const strLeft = this.textarea.element.value.slice(0, cursor);
          const strRight = this.textarea.element.value.slice(cursor);
          this.textarea.element.focus();

          if (event.code === el.code) {
            element.classList.add('active');
          }
          if (event.code === el.code && element.textContent.length === 1) {
            event.preventDefault();
            if (cursor === str.value.length) {
              this.textarea.element.value += element.textContent;
            } else {
              cursor += 1;
              this.textarea.element.value = `${strLeft}${element.textContent}${strRight}`;
              str.setSelectionRange(cursor, cursor);
            }
          }
          if (event.code === 'Tab' && el.code === 'Tab') {
            event.preventDefault();
            cursor += 4;
            this.textarea.element.value = `${strLeft}    ${strRight}`;
            str.setSelectionRange(cursor, cursor);
          }
          if ((event.code === 'ArrowUp' && el.code === 'ArrowUp')
             || (event.code === 'ArrowLeft' && el.code === 'ArrowLeft')
             || (event.code === 'ArrowDown' && el.code === 'ArrowDown')
             || (event.code === 'ArrowRight' && el.code === 'ArrowRight')) {
            event.preventDefault();
            cursor += 1;

            this.textarea.element.value = `${strLeft}${element.textContent}${strRight}`;
            str.setSelectionRange(cursor, cursor);
          }
          if (event.code === 'CapsLock' && el.code === 'CapsLock') {
            element.classList.toggle('capslk');
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
