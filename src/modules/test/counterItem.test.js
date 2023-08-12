/**
 * @jest-environment jsdom
 */

import counterItem from '../itemCounter.js';

describe('Testing Count Item Function ', () => {
  test('Testing moovie 1  item', () => {
    document.body.innerHTML = `  <div class="moovie-list-container">
                <div class="moovie-item">
                    <div class="moovie-item-image-container">
                        <div class="moovie-item-picture">
                            <img src="" alt="" class="moovie-item-image">
                        </div>
                        <div class="moovie-item-image-description">
                            <h4 class="item-name">Name</h4>
                            <div class="moovie-item-likes">
                                <p class="heart"><i class="fa-regular fa-heart" id="likeIcon"></i></p>
                                <input type="hidden" name="idmoovie" value="" class="moovieId"> 
                                  <p class="likes-number"></p>
                            </div>
                        </div>
                    </div>
                    <div class="moovie-item-options">
                        <button type="button" class="btnComment">Comments</button>
                        <button type="button" id="btn-reserve">Reservation</button>
                    </div>
                </div>
                </div>
                `;

    expect(counterItem()).toEqual(1);
  });

  test('Testing 0 moovie item', () => {
    document.body.innerHTML = `  <div class="moovie-list-container">
              </div>
              `;
    expect(counterItem()).toEqual(0);
  });

  test('Testing moovie Counter not Be Negative', () => {
    document.body.innerHTML = `  <div class="moovie-list-container">
        <div class="moovie-item">
        <div class="moovie-item-image-container">
            <div class="moovie-item-picture">
                <img src="" alt="" class="moovie-item-image">
            </div>
            <div class="moovie-item-image-description">
                <h4 class="item-name">Name</h4>
                <div class="moovie-item-likes">
                    <p class="heart"><i class="fa-regular fa-heart" id="likeIcon"></i></p>
                    <input type="hidden" name="idmoovie" value="" class="moovieId"> 
                      <p class="likes-number"></p>
                </div>
            </div>
        </div>
        <div class="moovie-item-options">
            <button type="button" class="btnComment">Comments</button>
            <button type="button" id="btn-reserve">Reservation</button>
        </div>
    </div>
              </div>
              `;
    expect(counterItem()).toBeGreaterThanOrEqual(0);
  });

  test('Testing 9 moovie items', () => {
    document.body.innerHTML = `  <div class="moovie-list-container">
              <div class="moovie-item">
                  <div class="moovie-item-image-container">
                      <div class="moovie-item-picture">
                          <img src="" alt="" class="moovie-item-image">
                      </div>
                      <div class="moovie-item-image-description">
                          <h4 class="item-name">Name</h4>
                          <div class="moovie-item-likes">
                              <p class="heart"><i class="fa-regular fa-heart" id="likeIcon"></i></p>
                              <input type="hidden" name="idmoovie" value="" class="moovieId"> 
                                <p class="likes-number"></p>
                          </div>
                      </div>
                  </div>
                  <div class="moovie-item-options">
                      <button type="button" class="btnComment">Comments</button>
                      <button type="button" id="btn-reserve">Reservation</button>
                  </div>
              </div>

              <div class="moovie-item">
                  <div class="moovie-item-image-container">
                      <div class="moovie-item-picture">
                          <img src="" alt="" class="moovie-item-image">
                      </div>
                      <div class="moovie-item-image-description">
                          <h4 class="item-name">Name</h4>
                          <div class="moovie-item-likes">
                              <p class="heart"><i class="fa-regular fa-heart" id="likeIcon"></i></p>
                              <input type="hidden" name="idmoovie" value="" class="moovieId"> 
                                <p class="likes-number"></p>
                          </div>
                      </div>
                  </div>
                  <div class="moovie-item-options">
                      <button type="button" class="btnComment">Comments</button>
                      <button type="button" id="btn-reserve">Reservation</button>
                  </div>
              </div>

              <div class="moovie-item">
                  <div class="moovie-item-image-container">
                      <div class="moovie-item-picture">
                          <img src="" alt="" class="moovie-item-image">
                      </div>
                      <div class="moovie-item-image-description">
                          <h4 class="item-name">Name</h4>
                          <div class="moovie-item-likes">
                              <p class="heart"><i class="fa-regular fa-heart" id="likeIcon"></i></p>
                              <input type="hidden" name="idmoovie" value="" class="moovieId"> 
                                <p class="likes-number"></p>
                          </div>
                      </div>
                  </div>
                  <div class="moovie-item-options">
                      <button type="button" class="btnComment">Comments</button>
                      <button type="button" id="btn-reserve">Reservation</button>
                  </div>
              </div>

              <div class="moovie-item">
                  <div class="moovie-item-image-container">
                      <div class="moovie-item-picture">
                          <img src="" alt="" class="moovie-item-image">
                      </div>
                      <div class="moovie-item-image-description">
                          <h4 class="item-name">Name</h4>
                          <div class="moovie-item-likes">
                              <p class="heart"><i class="fa-regular fa-heart" id="likeIcon"></i></p>
                              <input type="hidden" name="idmoovie" value="" class="moovieId"> 
                                <p class="likes-number"></p>
                          </div>
                      </div>
                  </div>
                  <div class="moovie-item-options">
                      <button type="button" class="btnComment">Comments</button>
                      <button type="button" id="btn-reserve">Reservation</button>
                  </div>
              </div>

              <div class="moovie-item">
                  <div class="moovie-item-image-container">
                      <div class="moovie-item-picture">
                          <img src="" alt="" class="moovie-item-image">
                      </div>
                      <div class="moovie-item-image-description">
                          <h4 class="item-name">Name</h4>
                          <div class="moovie-item-likes">
                              <p class="heart"><i class="fa-regular fa-heart" id="likeIcon"></i></p>
                              <input type="hidden" name="idmoovie" value="" class="moovieId"> 
                                <p class="likes-number"></p>
                          </div>
                      </div>
                  </div>
                  <div class="moovie-item-options">
                      <button type="button" class="btnComment">Comments</button>
                      <button type="button" id="btn-reserve">Reservation</button>
                  </div>
              </div>

              <div class="moovie-item">
                  <div class="moovie-item-image-container">
                      <div class="moovie-item-picture">
                          <img src="" alt="" class="moovie-item-image">
                      </div>
                      <div class="moovie-item-image-description">
                          <h4 class="item-name">Name</h4>
                          <div class="moovie-item-likes">
                              <p class="heart"><i class="fa-regular fa-heart" id="likeIcon"></i></p>
                              <input type="hidden" name="idmoovie" value="" class="moovieId"> 
                                <p class="likes-number"></p>
                          </div>
                      </div>
                  </div>
                  <div class="moovie-item-options">
                      <button type="button" class="btnComment">Comments</button>
                      <button type="button" id="btn-reserve">Reservation</button>
                  </div>
              </div>

              <div class="moovie-item">
                  <div class="moovie-item-image-container">
                      <div class="moovie-item-picture">
                          <img src="" alt="" class="moovie-item-image">
                      </div>
                      <div class="moovie-item-image-description">
                          <h4 class="item-name">Name</h4>
                          <div class="moovie-item-likes">
                              <p class="heart"><i class="fa-regular fa-heart" id="likeIcon"></i></p>
                              <input type="hidden" name="idmoovie" value="" class="moovieId"> 
                                <p class="likes-number"></p>
                          </div>
                      </div>
                  </div>
                  <div class="moovie-item-options">
                      <button type="button" class="btnComment">Comments</button>
                      <button type="button" id="btn-reserve">Reservation</button>
                  </div>
              </div>

              <div class="moovie-item">
                  <div class="moovie-item-image-container">
                      <div class="moovie-item-picture">
                          <img src="" alt="" class="moovie-item-image">
                      </div>
                      <div class="moovie-item-image-description">
                          <h4 class="item-name">Name</h4>
                          <div class="moovie-item-likes">
                              <p class="heart"><i class="fa-regular fa-heart" id="likeIcon"></i></p>
                              <input type="hidden" name="idmoovie" value="" class="moovieId"> 
                                <p class="likes-number"></p>
                          </div>
                      </div>
                  </div>
                  <div class="moovie-item-options">
                      <button type="button" class="btnComment">Comments</button>
                      <button type="button" id="btn-reserve">Reservation</button>
                  </div>
              </div>

              <div class="moovie-item">
                  <div class="moovie-item-image-container">
                      <div class="moovie-item-picture">
                          <img src="" alt="" class="moovie-item-image">
                      </div>
                      <div class="moovie-item-image-description">
                          <h4 class="item-name">Name</h4>
                          <div class="moovie-item-likes">
                              <p class="heart"><i class="fa-regular fa-heart" id="likeIcon"></i></p>
                              <input type="hidden" name="idmoovie" value="" class="moovieId"> 
                                <p class="likes-number"></p>
                          </div>
                      </div>
                  </div>
                  <div class="moovie-item-options">
                      <button type="button" class="btnComment">Comments</button>
                      <button type="button" id="btn-reserve">Reservation</button>
                  </div>
              </div>
              </div>
              `;

    expect(counterItem()).toEqual(9);
  });
});
