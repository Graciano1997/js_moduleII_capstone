import showComments from './showComments.js';
import countComments from './commentsCounter.js';
import uploadCommment from './uploadComment.js';

const modal = (id, movie) => {
  const pageDisplay = document.getElementById('movies-display');
  const sec = document.createElement('section');
  sec.className = 'pop-modal';

  movie.forEach((episode, index) => {
    if (index === id) {
      sec.innerHTML = `
          <article>
              <box-icon name='x' class='close-popup'></box-icon>
              <div>
                  <img src=${episode.image.original} alt=${episode.name}>
                  <h2>${episode.name}</h2>
                  <p>${episode.summary}</p>
                  <ul>
                      <li>${episode.season}</li>
                      <li>${episode.rating.average}</li>
                  </ul>
              </div>
              <div class="comments-holder">
                  <h3>Comments <span class="cm-counter">(2)</span></h3>
                  <div class="user-comments" id="comments-sec">
  
                  </div>
              </div>
              <form data-index=${index} action="" class="form" id="form-field">
                  <h4>Add a Comment</h4> 
                  <input type="text" name="name" id="name" placeholder="Your name" required>
                  <textarea col=30 rows='10' type="text" id="comment" placeholder="Your insights..." required></textarea>
                  <input type="submit" value="Submit">
              </form>
          </article>
          `;
    }
  });
  pageDisplay.appendChild(sec);

  const closeIcon = document.querySelector('.close-popup');
  closeIcon.addEventListener('click', () => {
    sec.innerHTML = '';
    sec.style.display = 'none';
  });

  showComments(id);
  countComments(id);

  const formField = document.querySelectorAll('.form');

  formField.forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      uploadCommment(e);
    });
  });
};

export default modal;