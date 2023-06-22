const font = document.getElementById('text-fonts');
const text = document.querySelector('.font-changer__result');

font.addEventListener('change', (e) => {
  if (e.target.value === 'metalmania') {
    text.style.fontFamily = `'Metal Mania', cursive`;
  } else if (e.target.value === 'caesar') {
    text.style.fontFamily = `'Caesar Dressing', cursive`;
  } else if (e.target.value === 'opensans') {
    text.style.fontFamily = `'Open Sans', sans-serif`;
  }
});
