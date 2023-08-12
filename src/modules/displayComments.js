import { fetchComment } from './apiComment.js';

const showComments = (formId) => {
  fetchComment(formId).then((data) => {
    if (data.length > 0) {
      const info = data;
      const list = document.createElement('li');
      list.className = '.commentaries';
      info.forEach((data) => {
        list.innerHTML += `
                      <p>${data.creation_date} ${data.username}: ${data.comment}</p>
                  `;
      });
      const commentsHolder = document.getElementById('comments-sec');
      commentsHolder.innerHTML = '';
      commentsHolder.appendChild(list);
    } else {
      const div = document.createElement('div');
      div.innerHTML += `
                  <span>No comments</span>
              `;
      const commentsHolder = document.getElementById('comments-sec');
      commentsHolder.appendChild(div);
    }
  });
};

export default showComments;