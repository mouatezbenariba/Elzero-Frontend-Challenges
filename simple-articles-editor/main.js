const content = document.querySelector('.editor__content');
const chosenFont = document.querySelector('.editor__font');
const contentBold = document.querySelector('.editor__bold');
const fontSizeDecrease = document.querySelector('.editor__font-size--decrease');
const fontSizeValue = document.querySelector('.editor__editor__font-size---value');
const fontSizeIncrease = document.querySelector('.editor__font-size--increase');
const invertColors = document.querySelector('.editor__invert');

contentBold.addEventListener('click', () => {
  const isContentBold = getComputedStyle(content).fontWeight === '700';

  if (isContentBold) {
    content.style.fontWeight = '400';
  } else {
    content.style.fontWeight = '700';
  }
});

fontSizeValue.innerHTML = parseInt(getComputedStyle(content).fontSize);

fontSizeDecrease.addEventListener('click', () => {
  const currentFontStyle = getComputedStyle(content).fontSize;
  const newSize = parseInt(currentFontStyle) - 1;

  content.style.fontSize = `${newSize}px`;

  fontSizeValue.innerHTML = parseInt(getComputedStyle(content).fontSize);
});

fontSizeIncrease.addEventListener('click', () => {
  const currentFontStyle = getComputedStyle(content).fontSize;
  const newSize = parseInt(currentFontStyle) + 1;

  content.style.fontSize = `${newSize}px`;

  fontSizeValue.innerHTML = parseInt(getComputedStyle(content).fontSize);
});

invertColors.addEventListener('click', () => {
  const InvertState = getComputedStyle(content).filter === 'invert(0)';

  if (InvertState) {
    content.style.filter = 'invert(1)';
  } else {
    content.style.filter = 'invert(0)';
  }
});

chosenFont.addEventListener('change', () => {
  content.style.fontFamily = chosenFont.value;
});
