import Control from './control';

class Textarea extends Control {
  constructor(parent) {
    super(parent, 'textarea', 'text__content');
  }
}

const createTextarea = () => new Textarea(document.body);

export default createTextarea;
