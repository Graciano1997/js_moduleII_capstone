import * as Variable from './globalVar.js';
import counterItem from './itemCounter.js';

const fullMoovArray = [];

const displayMoov = async (id) => {
  await fetch(Variable.tvmazeApiUrl + id)
    .then((response) => response.json())
    .then((json) => {
      fullMoovArray.push(json);
      Variable.moovItemImage[id - 1].src = json.image.original;
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
  Variable.mooviesNumber.textContent= counterItem('.moovie-list-container');
};

export { initiatizeAllMoovies, fullMoovArray };
