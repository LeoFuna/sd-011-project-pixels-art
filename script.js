const pixelsBoard = document.querySelector('#pixel-board');
const colorPalette = document.querySelector('#color-palette');
const resetButton = document.querySelector('#clear-board');
const DEFAULT_TABLE_VALUE = 5;
const DEFAULT_COLOR = 'white';

colorPalette.addEventListener('click', (event) => {
  for (let index = 0; index < colorPalette.children.length; index += 1) {
    colorPalette.children[index].classList.remove('selected');
  }
  return event.target.classList.toggle('selected');
});

const createrElements = (elem, cl, id) => {
  const element = document.createElement(elem);
  // cl ? element.id = id : '';
  if (cl) {
    element.className = cl;
  }
  // id ? element.id = id : '';
  if (id) {
    element.id = id;
  }
  if (elem === 'li') {
    element.addEventListener('click', (event) => {
      let selectedColor = document.querySelector('#color-palette .selected');
      selectedColor = selectedColor.classList[1];
      event.target.style.backgroundColor = selectedColor;
    });
  }
  return element;
};

const createTable = () => {
  for (let line = 0; line < DEFAULT_TABLE_VALUE; line += 1) {
    pixelsBoard.appendChild(createrElements('ul', '', `line ${line}`));
    for (let column = 0; column < DEFAULT_TABLE_VALUE; column += 1) {
      const pixelLine = pixelsBoard.lastChild.appendChild(createrElements('li', 'pixel', `${line} ${column}`));
      pixelLine.style.backgroundColor = DEFAULT_COLOR;
    }
  }
};

createTable();

resetButton.addEventListener('click', () => {
  for (let lines = 0; lines < DEFAULT_TABLE_VALUE; lines += 1) {
    for (let column = 0; column < DEFAULT_TABLE_VALUE; column += 1) {
      pixelsBoard.children[lines].children[column].style.backgroundColor = DEFAULT_COLOR;
    }
  }
});
