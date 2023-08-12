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
      document.querySelectorAll('.likes-number').forEach((itemLike, index) => {
        itemLike.textContent = (json[index].likes > 1) ? (`${json[index].likes} Likes`) : (`${json[index].likes} Like`);
      });
    });
};

const initializeLikes = () => {
  document.querySelectorAll('.heart').forEach((moovitem, index) => {
    moovitem.addEventListener('click', () => {
      likeMoov(moovitem.nextElementSibling.value);
      document.querySelectorAll('#likeIcon')[index].classList.add('red');
      likesReader();
    });
  });
};

export { initializeLikes, likesReader };
