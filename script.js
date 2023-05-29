const btn = document.querySelector('.btn');

const listFrames = [
  "https://typatone.com/",
  "https://doge2048.com/",
  "https://drawing.garden",
  "https://cat-bounce.com/",
  "https://maketext.io/",
  "https://flappybird.io/"

];

function frameRandom() {
  const randomNumber = Math.floor(Math.random() * listFrames.length);
  return listFrames[randomNumber];
};

console.log(frameRandom());

function newSite() {
  const div = document.querySelector('.container');

  div.innerHTML = `<iframe src="${frameRandom()}" width="100%" height="100%"></iframe>`;
};

btn.addEventListener("click", newSite)