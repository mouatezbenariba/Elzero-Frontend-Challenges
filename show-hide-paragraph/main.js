const actionBtn = document.querySelector('.action__btn');
const actionCtn = document.querySelector('.action__content');
const CtnComptStyle = window.getComputedStyle(actionCtn);

function setOpacity() {
  CtnComptStyle.visibility === 'visible'
    ? actionCtn.style.setProperty('visibility', 'hidden')
    : actionCtn.style.setProperty('visibility', 'visible');
}

actionBtn.addEventListener('click', setOpacity);
