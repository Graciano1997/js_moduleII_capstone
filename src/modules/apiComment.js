const postComment = async (userComment) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UnDNHjpxcbjncx6bRyQ1/comments';

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
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/UnDNHjpxcbjncx6bRyQ1/comments?item_id=${movieID}`;

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