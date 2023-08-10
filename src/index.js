import './css/index.css';
// import fetchMovies from './modules/apiController.js';
import { fullMoovArray } from './modules/apiController.js';
// import { displayMoov } from './modules/apiController.js';
import displayMovies from './modules/DisplayShows.js';

const shows = () => {
  fullMoovArray.forEach((movie) => {
    displayMovies(movie);
  });
};

shows();