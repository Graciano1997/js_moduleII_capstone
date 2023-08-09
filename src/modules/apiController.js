import * as Variable from './globalVar.js';

const fullMoovArray = [];

const displayMoov = async (id) => {
  await fetch(Variable.tvmazeApiUrl + id)
    .then((response) => response.json())
    .then((json) => {
      fullMoovArray.push(json);
      Variable.moovItemImage[id - 1].src = json.image.original;
      Variable.moovItemName[id - 1].textContent = json.name;
    });
};

const initiatizeAllMoovies = () => {
  window.addEventListener('DOMContentLoaded', () => {
    for (let index = 1; index < 7; index += 1) {
      displayMoov(index);
    }
  });
};
export { initiatizeAllMoovies, fullMoovArray };