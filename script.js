const galary = document.querySelector('.galary');
const overlay = document.querySelector('.overlay');
const overlayImg = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

function createHtml ([v, h]) {
  return `<div class="item h${h} v${v}">
  <img src="images/${randomNumber(8)}.jpg" alt="">
   <div class="item_overlay">
    <button>View &rightarrow;</button>
  </div>
</div>`
}

function randomNumber (limit){
  return Math.floor(Math.random()*limit)+1;
}

const digits = Array.from({length: 50}, ()=>  
[randomNumber(4), randomNumber(4)]).concat([[1, 1], [1, 1],
  [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1],
  [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1],
  [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1],
  [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1],
  [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1],
  [1, 1], [1, 1], [1, 1],[1, 1], [1, 1], [1, 1]]);

const html = digits.map(createHtml).join('');

galary.innerHTML=html;