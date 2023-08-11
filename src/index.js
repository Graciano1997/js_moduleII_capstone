import './css/index.css';
import { initiatizeAllMoovies } from './modules/apiController.js';
import { initializeLikes, likesReader } from './modules/likeController.js';
import getMoov from './modules/popupModal.js';

initiatizeAllMoovies();
initializeLikes();
likesReader();
getMoov();