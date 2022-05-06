const changeСase = () => {
  const btnKeys = [...document.querySelectorAll('.key')];
  const btnKey = document.querySelector('.keyboard');
  const caps = document.querySelector('.key_capslock');

  btnKey.addEventListener('click', () => {
    btnKeys.forEach((el) => {
      const elem = el;
      if (elem.textContent.length === 1) {
        if (caps.classList.contains('capslk')) {
          elem.textContent = elem.textContent.toUpperCase();
        } else {
          elem.textContent = elem.textContent.toLowerCase();
        }
      }
    });
  });

  document.addEventListener('keydown', () => {
    btnKeys.forEach((el) => {
      const elem = el;
      if (elem.textContent.length === 1) {
        if (caps.classList.contains('capslk')) {
          elem.textContent = elem.textContent.toUpperCase();
        } else {
          elem.textContent = elem.textContent.toLowerCase();
        }
      }
    });
  });
};
export default changeСase;
