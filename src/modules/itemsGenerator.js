const videoItemTemplate = `
                <div class="moovie-item">
                    <div class="moovie-item-image-container">
                        <div class="moovie-item-picture">
                        </div>
                        <div class="moovie-item-image-description">
                            <h4 class="item-name">Name</h4>
                            <div class="moovie-item-likes">
                                <p class="heart" ><i class="fa-regular fa-heart" id="likeIcon"></i></p>
                                <input type="hidden" name="idmoovie" value="" class="moovieId">
                                  <p class="likes-number"><span class="nlike" ></span> likes</p>
                            </div>
                        </div>
                    </div>
                    <div class="moovie-item-options">
                        <button type="button" class="btnComment">Comments</button>
                        <button type="button" class="btn-reserve">Reservation</button>
                    </div>
                </div>`;

const itemCreator = (number) => {
  const moovieItemContainer = document.createElement('div');
  moovieItemContainer.classList.add('moovie-list-container');
  for (let i = 1; i <= number; i += 1) {
    moovieItemContainer.innerHTML += videoItemTemplate;
  }
  document.querySelector('.section-main').append(moovieItemContainer);
};

export default itemCreator;