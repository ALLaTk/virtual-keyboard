import Control from './control.js';

class Header extends Control {
  constructor(parent) {
    super(parent, 'div', 'header');
    this.titlle = new Control(this.element, 'h1', 'titlle');
    this.titlle.element.textContent = 'Virtual Keyboard';
    this.subtitlle = new Control(this.element, 'h2', 'subtitlle');
    this.subtitlle.element.textContent = 'Windows';
    this.subtitlle_second = new Control(this.element, 'h2', 'subtitlle_second');
    this.subtitlle_second.element.textContent = 'Change launguages';
  }
}

const createHead = () => new Header(document.body);

export default createHead;
