import * as Variable from './globalVar.js';
import counterItem from './itemCounter.js';

const fullMoovArray = [];

const displayMoov = async (id) => {
  await fetch(Variable.tvmazeApiUrl + id)
    .then((response) => response.json())
    .then((json) => {
      fullMoovArray.push(json);
      document.querySelectorAll('.moovie-item-image')[id - 1].classList.remove('rotate');
      document.querySelectorAll('.moovie-item-image')[id - 1].src = json.image.original;
      Variable.moovItemName[id - 1].textContent = json.name;
      Variable.moovId[id - 1].value = json.id;
    });
};

const initiatizeAllMoovies = () => {
  window.addEventListener('DOMContentLoaded', () => {
    for (let index = 1; index < 10; index += 1) {
      displayMoov(index);
    }
  });
  Variable.mooviesNumber.textContent = counterItem('.moovie-list-container');
};

const seeButton = () => {
  document.querySelectorAll('.moovie-item').forEach((item, index) => {
    if (index >= 5) {
      item.classList.toggle('hideItem');
    }
  });
};

const seeButtonListneer = () => {
  document.querySelector('#btnSee').addEventListener('click', () => {
    if (document.querySelector('#btnSee').innerHTML === '<i class="fa-solid fa-eye-slash"></i> See Less') {
      document.querySelector('#btnSee').innerHTML = '<i class="fa-solid fa-eye"></i> See More';
    } else {
      document.querySelector('#btnSee').innerHTML = '<i class="fa-solid fa-eye-slash"></i> See Less';
    }
    seeButton();
  });
};

export { initiatizeAllMoovies, fullMoovArray, seeButtonListneer };
