const keyData = [
  [ // row 1
    {
      key: { ru: 'ё', en: '`' }, shift: { ru: 'Ё', en: '~' }, code: 'Backquote', class: 'key',
    },
    {
      key: { ru: '1', en: '1' }, shift: { ru: '!', en: '!' }, code: 'Digit1', class: 'key',
    },
    {
      key: { ru: '2', en: '2' }, shift: { ru: '"', en: '@' }, code: 'Digit2', class: 'key',
    },
    {
      key: { ru: '3', en: '3' }, shift: { ru: '№', en: '#' }, code: 'Digit3', class: 'key',
    },
    {
      key: { ru: '4', en: '4' }, shift: { ru: ';', en: '$' }, code: 'Digit4', class: 'key',
    },
    {
      key: { ru: '5', en: '5' }, shift: { ru: '%', en: '%' }, code: 'Digit5', class: 'key',
    },
    {
      key: { ru: '6', en: '6' }, shift: { ru: ':', en: '^' }, code: 'Digit6', class: 'key',
    },
    {
      key: { ru: '7', en: '7' }, shift: { ru: '?', en: '&' }, code: 'Digit7', class: 'key',
    },
    {
      key: { ru: '8', en: '8' }, shift: { ru: '*', en: '*' }, code: 'Digit8', class: 'key',
    },
    {
      key: { ru: '9', en: '9' }, shift: { ru: '(', en: '(' }, code: 'Digit9', class: 'key',
    },
    {
      key: { ru: '0', en: '0' }, shift: { ru: ')', en: ')' }, code: 'Digit0', class: 'key',
    },
    {
      key: { ru: '-', en: '-' }, shift: { ru: '_', en: '_' }, code: 'Minus', class: 'key',
    },
    {
      key: { ru: '=', en: '=' }, shift: { ru: '+', en: '+' }, code: 'Equal', class: 'key',
    },
    {
      key: { ru: 'Backspace', en: 'Backspace' }, code: 'Backspace', class: 'key key_backspace',
    },
  ],
  [ // row 2
    {
      key: { ru: 'Tab', en: 'Tab' }, code: 'Tab', class: 'key key_tab',
    },
    {
      key: { ru: 'й', en: 'q' }, shift: { ru: 'Й', en: 'Q' }, code: 'KeyQ', class: 'key',
    },
    {
      key: { ru: 'ц', en: 'w' }, shift: { ru: 'Ц', en: 'W' }, code: 'KeyW', class: 'key',
    },
    {
      key: { ru: 'у', en: 'e' }, shift: { ru: 'У', en: 'E' }, code: 'KeyE', class: 'key',
    },
    {
      key: { ru: 'к', en: 'r' }, shift: { ru: 'К', en: 'R' }, code: 'KeyR', class: 'key',
    },
    {
      key: { ru: 'е', en: 't' }, shift: { ru: 'Е', en: 'T' }, code: 'KeyT', class: 'key',
    },
    {
      key: { ru: 'н', en: 'y' }, shift: { ru: 'Н', en: 'Y' }, code: 'KeyY', class: 'key',
    },
    {
      key: { ru: 'г', en: 'u' }, shift: { ru: 'Г', en: 'U' }, code: 'KeyU', class: 'key',
    },
    {
      key: { ru: 'ш', en: 'i' }, shift: { ru: 'Ш', en: 'I' }, code: 'KeyI', class: 'key',
    },
    {
      key: { ru: 'щ', en: 'o' }, shift: { ru: 'Щ', en: 'O' }, code: 'KeyO', class: 'key',
    },
    {
      key: { ru: 'з', en: 'p' }, shift: { ru: 'З', en: 'P' }, code: 'KeyP', class: 'key',
    },
    {
      key: { ru: 'х', en: '[' }, shift: { ru: 'Х', en: '{' }, code: 'BracketLeft', class: 'key',
    },
    {
      key: { ru: 'ъ', en: ']' }, shift: { ru: 'Ъ', en: '}' }, code: 'BracketRight', class: 'key',
    },
    {
      key: { ru: '\\', en: '\\' }, shift: { ru: '|', en: '|' }, code: 'Backslash', class: 'key key_backslash',
    },
    {
      key: { ru: 'Del', en: 'Del' }, code: 'Delete', class: 'key key_del',
    },
  ],
  [ // row 3
    {
      key: { ru: 'CapsLk', en: 'CapsLk' }, code: 'CapsLock', class: 'key key_capslock',
    },
    {
      key: { ru: 'ф', en: 'a' }, shift: { ru: 'Ф', en: 'A' }, code: 'KeyA', class: 'key',
    },
    {
      key: { ru: 'ы', en: 's' }, shift: { ru: 'Ы', en: 'S' }, code: 'KeyS', class: 'key',
    },
    {
      key: { ru: 'в', en: 'd' }, shift: { ru: 'В', en: 'D' }, code: 'KeyD', class: 'key',
    },
    {
      key: { ru: 'а', en: 'f' }, shift: { ru: 'А', en: 'F' }, code: 'KeyF', class: 'key',
    },
    {
      key: { ru: 'п', en: 'g' }, shift: { ru: 'П', en: 'G' }, code: 'KeyG', class: 'key',
    },
    {
      key: { ru: 'р', en: 'h' }, shift: { ru: 'Р', en: 'H' }, code: 'KeyH', class: 'key',
    },
    {
      key: { ru: 'о', en: 'j' }, shift: { ru: 'О', en: 'J' }, code: 'KeyJ', class: 'key',
    },
    {
      key: { ru: 'л', en: 'k' }, shift: { ru: 'Л', en: 'K' }, code: 'KeyK', class: 'key',
    },
    {
      key: { ru: 'д', en: 'l' }, shift: { ru: 'Д', en: 'L' }, code: 'KeyL', class: 'key',
    },
    {
      key: { ru: 'ж', en: ';' }, shift: { ru: 'Ж', en: ':' }, code: 'Semicolon', class: 'key',
    },
    {
      key: { ru: 'э', en: '\'' }, shift: { ru: 'Э', en: '"' }, code: 'Quote', class: 'key',
    },
    {
      key: { ru: 'Enter', en: 'Enter' }, code: 'Enter', class: 'key key_enter',
    },
  ],
  [ // row 4
    {
      key: { ru: 'Shift', en: 'Shift' }, code: 'ShiftLeft', class: 'key key_leftshift',
    },
    {
      key: { ru: 'я', en: 'z' }, shift: { ru: 'Я', en: 'Z' }, code: 'KeyZ', class: 'key',
    },
    {
      key: { ru: 'ч', en: 'x' }, shift: { ru: 'Ч', en: 'X' }, code: 'KeyX', class: 'key',
    },
    {
      key: { ru: 'с', en: 'c' }, shift: { ru: 'С', en: 'C' }, code: 'KeyC', class: 'key',
    },
    {
      key: { ru: 'м', en: 'v' }, shift: { ru: 'М', en: 'V' }, code: 'KeyV', class: 'key',
    },
    {
      key: { ru: 'и', en: 'b' }, shift: { ru: 'И', en: 'B' }, code: 'KeyB', class: 'key',
    },
    {
      key: { ru: 'т', en: 'n' }, shift: { ru: 'Т', en: 'N' }, code: 'KeyN', class: 'key',
    },
    {
      key: { ru: 'ь', en: 'm' }, shift: { ru: 'Ь', en: 'M' }, code: 'KeyM', class: 'key',
    },
    {
      key: { ru: 'б', en: ',' }, shift: { ru: 'Б', en: '<' }, code: 'Comma', class: 'key',
    },
    {
      key: { ru: 'ю', en: '.' }, shift: { ru: 'Ю', en: '>' }, code: 'Period', class: 'key',
    },
    {
      key: { ru: '.', en: '/' }, shift: { ru: ',', en: '?' }, code: 'Slash', class: 'key',
    },
    {
      key: { ru: '▲', en: '▲' }, code: 'ArrowUp', class: 'key',
    },
    {
      key: { ru: 'Shift', en: 'Shift' }, code: 'ShiftRight', class: 'key key_rightshift',
    },
  ],
  [
    {
      key: { ru: 'Cntrl', en: 'Cntrl' }, code: 'ControlLeft', class: 'key key_leftctrl',
    },
    {
      key: { ru: 'Win', en: 'Win' }, code: 'MetaLeft', class: 'key key_win',
    },
    {
      key: { ru: 'Alt', en: 'Alt' }, code: 'AltLeft', class: 'key key_leftalt',
    },
    { key: { ru: ' ', en: ' ' }, code: 'Space', class: 'key key_space' },
    {
      key: { ru: 'Alt', en: 'Alt' }, code: 'AltRight', class: 'key key_rightalt',
    },
    {
      key: { ru: '◄', en: '◄' }, code: 'ArrowLeft', class: 'key',
    },
    {
      key: { ru: '▼', en: '▼' }, code: 'ArrowDown', class: 'key',
    },
    {
      key: { ru: '►', en: '►' }, code: 'ArrowRight', class: 'key',
    },
    {
      key: { ru: 'Cntrl', en: 'Cntrl' }, code: 'ControlRight', class: 'key key_rightctrl',
    },
  ],
];

export default keyData;
