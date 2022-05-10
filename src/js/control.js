class Control {
  constructor(parent, tag, name) {
    this.element = document.createElement(tag);
    this.element.className = name;
    parent.append(this.element);
  }

  destroy() {
    this.node.remove();
  }
}

export default Control;
