import './css/index.css';
import './css/mobile.css';
import { initiatizeAllMoovies, seeButtonListneer } from './modules/apiController.js';
import { initializeLikes, likesReader } from './modules/likeController.js';
import getMoov from './modules/popupModal.js';
import setLoadingImage from './modules/setLoadingImage';

setLoadingImage();
initiatizeAllMoovies();
initializeLikes();
likesReader();
getMoov();
seeButtonListneer();
