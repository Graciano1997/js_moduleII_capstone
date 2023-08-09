import { likeMoov } from "./apiController.js";

const initializeLikes = () => {
  document.querySelectorAll('.heart').forEach((moovitem) => {
    moovitem.addEventListener('click', () => {
      likeMoov(moovitem.nextElementSibling.value);
    })
  })
}

export { initializeLikes };