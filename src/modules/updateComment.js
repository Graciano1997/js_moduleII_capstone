import * as Variable from './globalVar.js';

const postComment = async (userComment) => {
  const Id = Variable.involvementApiUrl;
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${Id}/comments`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userComment),
  });
  return res;
};

const fetchComment = async (movieID) => {
  const Id = Variable.involvementApiUrl;
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${Id}/comments?item_id=${movieID}`;

  try {
    const res = await fetch(url);
    const outcome = await res.json();
    return outcome;
  } catch (err) {
    if (err instanceof TypeError && err.message === "'moviedID' not found.") {
      return [];
    }
    throw err;
  }
};

export { postComment, fetchComment };
