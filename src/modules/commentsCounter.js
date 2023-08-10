import { fetchComment } from './updateComment.js';

const countComments = async (movieID) => {
  const allComments = await fetchComment(movieID);
  const commentsLength = allComments.length;

  if (commentsLength === undefined) {
    const showCount = document.querySelector('.cm-counter');
    showCount.innerHTML = '0';
  } else {
    const showCount = document.querySelector('.cm-counter');
    showCount.innerHTML = commentsLength;
  }
  return commentsLength;
};

export default countComments;