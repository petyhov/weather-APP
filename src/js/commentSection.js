import comments from './commentsArray.js';
import refs from './refs.js';

function getText() {
  const randomComment = Math.floor(Math.random() * comments.length);
  refs.commentTextContent.textContent = comments[randomComment].quote;
  refs.commentTextAuthor.textContent = comments[randomComment].author;
}
setInterval(getText, 9000);
