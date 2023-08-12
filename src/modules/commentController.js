import commenterCounter from './commenterCounter.js';
import * as Variable from './globalVar.js';

const createCommenter = (data, type) => {
  const el = document.createElement(type);
  el.innerHTML = `<b class='date'>${data.creation_date}</b> ${data.username} : <span class ="comment">’’ ${data.comment} ’’</span>`;
  return el;
};

const noCommentFunction = () => {
  const el = document.createElement('p');
  el.classList.add('noComment');
  el.textContent = 'No comments !!';
  return el;
};
const commentsReader = async (id) => {
  await fetch(`${Variable.involvementApiUrl}comments?item_id=${id}`)
    .then((response) => response.json())
    .then((json) => {
      while (document.querySelector('.user-comments').firstChild) {
        document.querySelector('.user-comments').firstChild.remove();
      }
      if (json.length >= 0) {
        json.forEach((comment) => {
          document.querySelector('.user-comments').append(createCommenter(comment, 'p'));
        });
        // display counter items in the container
        document.querySelector('#commentsCounter').innerHTML = commenterCounter();
      } else { document.querySelector('.user-comments').append(noCommentFunction()); }
    });
};

const commentMoov = async (commentObject) => {
  await fetch(`${Variable.involvementApiUrl}comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: commentObject.item_id,
      username: commentObject.username,
      comment: commentObject.comment,
    }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  commentsReader(commentObject.item_id);
};

export { commentMoov, commentsReader };
