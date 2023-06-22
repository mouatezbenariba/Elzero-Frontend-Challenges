const font = document.getElementById('text-fonts');
const text = document.querySelector('.font-changer__result');

font.addEventListener('change', (e) => {
  text.style.fontFamily = e.target.value;
});
