import comments from './commentsArray.js';
const commentTextContent = document.querySelector('.comments__content');

function getText() {
  commentTextContent.innerHTML =
    comments[Math.floor(Math.random() * comments.length)];
}
setInterval(getText, 9000);
