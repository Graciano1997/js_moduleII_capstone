import 'boxicons';
import modal from './Popup.js';

export default function displayMovies(show) {
  const pageDisplay = document.getElementById('moovie-list-container');

  show.forEach((episode) => {
    const page = document.createElement('article');
    page.className = 'moovie-list-container';

    // display only series with an id of less than 8;
    page.innerHTML = `
    <div class="moovie-item">
        <div class="moovie-item-image-container">
            <div class="moovie-item-picture">
                <img src= ${episode.image.medium} alt=${episode.id}>
            </div>
            <div class="moovie-item-image-description">
                <h4 class="item-name">${episode.name}</h4>
                <div class="moovie-item-likes">
                    <p class="heart"><i class="fa-regular fa-heart" id="like"></i></p>
                    <p class="likes-number">25 Likes</p>
                </div>
            </div>
        </div>
        <div class="moovie-item-options">
            <button type="button">Comments</button>
            <button type="button" id="btn-reserve">Reservation</button>
        </div>
    </div>
      `;
    pageDisplay.appendChild(page);
  });

  const commsBtn = document.querySelectorAll('.comment-btn');

  commsBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      modal(index, show);
    });
  });
}
