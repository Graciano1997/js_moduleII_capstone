import { postComment } from './updateComment.js';
import showComments from './showComments.js';
import countComments from './commentsCounter.js';

const uploadCommment = async (e) => {
  const formID = e.target.getAttribute('data-index');
  const user = document.getElementById('name');
  const message = document.getElementById('comment');

  const latestComment = {
    item_id: formID,
    username: user.value,
    comment: message.value,
  };

  await postComment(latestComment);
  user.value = '';
  message.value = '';
  showComments(formID);
  e.target.parentNode.children[0].children.innerHTML = countComments(formID) + 1;
};

export default uploadCommment;