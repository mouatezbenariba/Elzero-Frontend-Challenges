let appInput = document.querySelector('.local__input');
let appOutput = document.querySelector('.local__output');
let appCheckControl = document.querySelector('.local__check');
let appAddControl = document.querySelector('.local__add');
let appDeleteControl = document.querySelector('.local__delete');
let appShowList = document.querySelector('.local__show');

// Check Item
const checkAvailability = () => {
  if (!appInput.value) {
    appOutput.innerHTML = `Input Can't Be Empty`;
  } else if (localStorage.getItem(`${appInput.value}`) !== null) {
    appOutput.innerHTML = `Found Local Storage Item Called <span>${appInput.value}</span>`;
    return true;
  } else {
    appOutput.innerHTML = `No Local Storage Item Called <span>${appInput.value}</span>`;
  }
};

appCheckControl.addEventListener('click', checkAvailability);

// Add Item
const addItem = () => {
  if (appInput.value) {
    localStorage.setItem(`${appInput.value}`, '');
    appOutput.innerHTML = `Local Storage Item <span>${appInput.value}</span> is Added`;
  } else {
    appOutput.innerHTML = `Input Can't Be Empty`;
  }
};

appAddControl.addEventListener('click', addItem);

// Delete Item
const deleteItem = () => {
  if (!appInput.value) {
    appOutput.innerHTML = `Input Can't Be Empty`;
  } else if (checkAvailability() !== true) {
    appOutput.innerHTML = `No Local Storage Item Called <span>${appInput.value}</span>`;
  } else {
    localStorage.removeItem(`${appInput.value}`);
    appOutput.innerHTML = `Deleted Local Storage Item <span>${appInput.value}</span>`;
  }
};

appDeleteControl.addEventListener('click', deleteItem);

// Show Items
const showList = () => {
  appOutput.textContent = ``;
  for (const [key, value] of Object.entries(localStorage)) {
    const item = document.createElement('span');
    item.style.display = 'block';
    item.textContent = `${key}`;
    appOutput.appendChild(item);
  }
};

appShowList.addEventListener('click', showList);
