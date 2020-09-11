import comments from './commentsArray.js';
import refs from './refs.js';

function getText() {
  refs.commentTextContent.innerHTML =
    comments[Math.floor(Math.random() * comments.length)];
}
setInterval(getText, 9000);
