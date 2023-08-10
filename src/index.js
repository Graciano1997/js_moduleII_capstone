import './css/index.css';
import { initiatizeAllMoovies } from './modules/apiController.js';
import { initializeLikes, likesReader } from './modules/likeController.js';

initiatizeAllMoovies();
initializeLikes();
likesReader();
