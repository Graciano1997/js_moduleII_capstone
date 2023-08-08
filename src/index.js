import './css/index.css';
import { displayMoov, full_moov_array } from './modules/apiController.js';

for (let index = 1; index < 7; index++) {
    displayMoov(index);
}

console.log(full_moov_array);