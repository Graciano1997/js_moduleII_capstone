import './css/index.css';
import './css/mobile.css';
import { initiatizeAllMoovies, seeButtonListneer } from './modules/apiController.js';
import itemCreator from './modules/itemsGenerator';
import { initializeLikes, likesReader } from './modules/likeController.js';
import getMoov from './modules/popupModal.js';
import setLoadingImage from './modules/setLoadingImage.js';

itemCreator(10);
setLoadingImage();
initiatizeAllMoovies();
initializeLikes();
likesReader();
getMoov();
seeButtonListneer();
