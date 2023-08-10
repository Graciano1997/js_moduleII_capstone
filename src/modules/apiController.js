// const fetchMovies = async () => {
//   const res = await fetch('https://api.tvmaze.com/shows/1/episodes');
//   const result = await res.json();

//   const movieData = result.map((movie) => ({

//     id: movie.id,
//     name: movie.name,
//     image: movie.image,
//     summary: movie.summary,
//     season: movie.season,
//     rating: movie.rating,
//     airdate: movie.airdate,

//   }));
//   return movieData;
// };

// export default fetchMovies;

import * as Variable from './globalVar.js';

const fullMoovArray = [];

const displayMoov = async (id) => {
  await fetch(Variable.tvmazeApiUrl + id)
    .then((response) => response.json())
    .then((json) => {
      fullMoovArray.push(json);
      Variable.moovItemImage[id - 1].src = json.image.original;
      Variable.moovItemName[id - 1].textContent = json.name;
      // Variable.moovId[id - 1].value = json.id;
    });
  return fullMoovArray;
};

const initiatizeAllMoovies = () => {
  window.addEventListener('DOMContentLoaded', () => {
    for (let index = 1; index < 10; index += 1) {
      displayMoov(index);
    }
  });
};

export { initiatizeAllMoovies, fullMoovArray, displayMoov };