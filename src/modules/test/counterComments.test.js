/**
 * @jest-environment jsdom
 */

import counterItem from '../itemCounter.js';

describe('Testing comments numbers Item Function ', () => {
  test('Testing 1 comment', () => {
    document.body.innerHTML = `  <div class="user-comments" id="comments-item">
    <p><b class="date">2023-08-11</b> Bett Enoch : <span class="comment">’’ I want to see this today!! ’’</span></p>
    </div>
    `;
    expect(counterItem('#comments-item')).toEqual(1);
  });

  test('Testing 0 comment', () => {
    document.body.innerHTML = `  <div class="user-comments" id="comments-item">
    </div>`;
    expect(counterItem('#comments-item')).toEqual(0);
  });

  test('Testing comment number not Be Negative', () => {
    document.body.innerHTML = `  <div class="user-comments" id="comments-item">
    <p><b class="date">2023-08-11</b> Bett Enoch : <span class="comment">’’ I want to see this film!! ’’</span></p>
    <p><b class="date">2023-08-11</b> Bett Enoch : <span class="comment">’’ I want to see this film!! ’’</span></p>
    <p><b class="date">2023-08-11</b> Bett Enoch : <span class="comment">’’ I want to see this film!! ’’</span></p>
    <p><b class="date">2023-08-11</b> Bett Enoch : <span class="comment">’’ I want to see this film!! ’’</span></p>  
    </div>
`;
    expect(counterItem('#comments-item')).toBeGreaterThanOrEqual(0);
  });
});
