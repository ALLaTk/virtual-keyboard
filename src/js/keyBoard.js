import Control from './control.js';
import keyData from './keyData.js';

class KeyBoard extends Control {
  constructor(parent) {
    super(parent, 'div', 'keyboard');

    for (let i = 0; i < keyData.length; i += 1) {
      this.row = new Control(this.element, 'div', 'row');
      keyData[i].forEach((el) => {
        this.el = new Control(this.row.element, 'button', `${el.class}`);
        this.el.element.textContent = `${el.key.en}`;
      });
    }
  }
}

const createKeyboard = () => new KeyBoard(document.body);

export default createKeyboard;
