import * as Variable from './globalVar.js';

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
    for (let index = 1; index < 7; index += 1) {
      displayMoov(index);
    }
  });
};

const likeMoov = async (id) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UnDNHjpxcbjncx6bRyQ1/likes', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  window.location.reload();
};

export { initiatizeAllMoovies, fullMoovArray, likeMoov };
