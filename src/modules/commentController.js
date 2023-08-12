import * as Variable from './globalVar.js';

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
};

export default { commentMoov };
