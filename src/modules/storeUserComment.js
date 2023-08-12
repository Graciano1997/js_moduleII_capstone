import { postComment } from './apiComment.js';
import showComments from './displayComments.js';
import countComments from './commentsCounter.js';

const pushCommment = async (e) => {
  const formID = e.target.getAttribute('.moovieId').value;
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

export default pushCommment;