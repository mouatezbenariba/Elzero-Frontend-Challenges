let tabs = document.querySelectorAll('.slider__tabs span');
let images = document.querySelectorAll('.slider__images img');
let welcomeMessage = document.querySelector('.slider__welcome');

function show(element) {
  element.style.zIndex = '5';
  element.style.opacity = '1';
}

function hide(element) {
  element.style.zIndex = '0';
  element.style.opacity = '0';
}

Object.values(tabs).forEach((item) => {
  item.addEventListener('click', () => {
    let position = Object.values(tabs).indexOf(item);

    // hide all images
    Object.values(images).forEach((item) => {
      hide(item);
    });

    // decrease the opacity of all the tabs
    Object.values(tabs).forEach((item) => {
      item.style.opacity = '0.5';
    });

    // show the selected image
    show(document.querySelector(`.slider-${position}`));

    // highlight the clicked tab
    item.style.opacity = '1';

    // attach to welcome message to the first image
    if (position === 0) {
      show(welcomeMessage);
    } else {
      hide(welcomeMessage);
    }
  });
});
