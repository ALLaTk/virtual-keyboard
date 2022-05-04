import Control from './control.js';

class Textarea extends Control {
  constructor(parent) {
    super(parent, 'textarea', 'textarea__content');
  }
}

const createTextarea = () => new Textarea(document.body);

export default createTextarea;
