import * as Variable from './globalVar.js';
import { postComment } from './apiComment.js';
import showComments from './displayComments.js';
// import countComments from './commentsCounter.js';

const popup = () => {
  const popupContainer = document.querySelector('.popup-container');
  const sectionCommenter = document.createElement('section');
  sectionCommenter.className = 'pop-modal';
  sectionCommenter.innerHTML = `
    <article class="pop-comenters-items">
        
        <div class="img-section">

            <img src="" alt="" class="image-popup" />
            <button class="close-popup">X</button>
        </div>
        <div class="movie-details">
            <div class="movie-title">MOVIE NAME</div>
            <P class="movie-summary"> <span class="tag">About: </span>""</P>
        </div>
        <ul class="more-info">
            <li>
                <div class="premiered-date"> <span class="tag">Premiered: </span>2013-03-04</div>
                <div class="end-date"> <span class="tag">Ended: </span>2016-03-04</div>
                <div class="language"> <span class="tag">Language: </span>English</div>
            </li>
            <li>
                <div class="genre"> <span class="tag">Genre: </span>"Drama","Science-Fiction","Thriller"</div>
                <div class="rating"> <span class="tag">Rating: </span>4.56</div>
            </li>
        </ul>
        <div class="comments-holder">
            <h3>Comments (<span class="comments-counter">0</span>)</h3>
            <div class="user-comments" id="comments-sec"></div>
        </div>
        <p class="summary"></p>
        <form action="" class="form" id="form-field">
            <h4>Add a Comment</h4>
            <div class="form-inputs">
            <input
              type="hidden"
              name="formId"
              value=""
              class="moovieId"
            />
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                required
            />
            <textarea
                cols="30"
                rows="10"
                type="text"
                id="comment"
                placeholder="Your insights..."
                required
            ></textarea>
            <input type="submit" class="submit-btn" value="Submit" />
            </div>
        </form>
    </article>
`;
  popupContainer.appendChild(sectionCommenter);
  const closeIcon = document.querySelector('.close-popup');
  closeIcon.addEventListener('click', () => {
    sectionCommenter.innerHTML = '';
    sectionCommenter.style.display = 'none';
    const popupContainer = document.querySelector('.popup-container');
    popupContainer.classList.add('hide');
  });
};
const getMoov = () => {
  document.querySelectorAll('.comment-btn').forEach((btnMoovComment, index) => {
    btnMoovComment.addEventListener('click', async () => {
      const moovId = document.querySelectorAll('.moovieId')[index].value;
      await fetch(Variable.tvmazeApiUrl + moovId)
        .then((response) => response.json())
        .then((json) => {
          const popupContainer = document.querySelector('.popup-container');
          popupContainer.classList.remove('hide');
          popup();
          document.querySelector('.movie-title').innerHTML = json.name;
          document.querySelector('.image-popup').src = json.image.original;
          document.querySelector('.movie-summary').innerHTML = json.summary;
          document.querySelector('.premiered-date').innerHTML = json.premiered;
          document.querySelector('.end-date').innerHTML = json.ended;
          document.querySelector('.language').innerHTML = json.language;
          document.querySelector('.genre').innerHTML = json.genres;
          document.querySelector('.rating').innerHTML = json.rating.average;
        });
    });
  });
};

const commentsAlgo = () => {
  const formField = document.querySelectorAll('.form');

  formField.forEach((form) => {
    form.addEventListener('submit', async (e) => {
      // const moovId = e.target.getAttribute('.moovieId')[index].value;
      e.preventDefault();
      const user = document.getElementById('name');
      const message = document.getElementById('comment');

      const latestComment = {
        item_id: 1,
        username: user.value,
        comment: message.value,
      };
      await postComment(latestComment);
      user.value = '';
      message.value = '';
      showComments(1);
    });
  });
};

export { getMoov, commentsAlgo };