import { fetchComment } from './apiComment.js';

const countComments = async (movieID) => {
  const allComments = await fetchComment(movieID);
  const commentsLength = allComments.length;

  if (commentsLength === undefined) {
    const showCount = document.querySelector('.comments-counter');
    showCount.innerHTML = '0';
  } else {
    const showCount = document.querySelector('.comments-counter');
    showCount.innerHTML = commentsLength;
  }
  return commentsLength;
};

export default countComments;