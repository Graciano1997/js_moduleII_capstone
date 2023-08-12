import * as Variable from './globalVar.js';

const likeMoov = async (id) => {
  await fetch(`${Variable.involvementApiUrl}likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
};

const likesReader = async () => {
  await fetch(`${Variable.involvementApiUrl}likes/`)
    .then((response) => response.json())
    .then((json) => {
      document.querySelectorAll('.nlike').forEach((itemLike, index) => {
        itemLike.textContent = json[index].likes;
      });
    });
};

const initializeLikes = () => {
  document.querySelectorAll('.heart').forEach((moovitem, index) => {
    moovitem.addEventListener('click', () => {
      likeMoov(moovitem.nextElementSibling.value);
      document.querySelectorAll('#likeIcon')[index].classList.add('red');
      document.querySelectorAll('.nlike')[index].textContent = (parseInt(document.querySelectorAll('.nlike')[index].textContent) + 1);
    });
  });
};

export { initializeLikes, likesReader };
