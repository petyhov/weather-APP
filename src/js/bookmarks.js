import refs from './refs';
import {getCarusel} from './slick.js';


export let bookmarks = [];

const exampleTemplate = bookmark => {
  return `<li class="bookmarks__item">${bookmark}<button class="bookmarkcCloseBtn"></button></li>`;
};

export const downloadBookmarks = () => {
  if (localStorage.getItem('city')) {
    bookmarks = JSON.parse(localStorage.getItem('city'));
    const bookmarksTemplate = bookmarks
      .map(bookmark => exampleTemplate(bookmark))
      .map(item => refs.bookmarkRef.insertAdjacentHTML('beforeend', item));
      getCarusel('.bookmarks__list');
  }
};

export const updateBookmarks = city => {
  if (!bookmarks.includes(city)) {
    bookmarks.push(city);
    localStorage.setItem('city', JSON.stringify(bookmarks));
    refs.bookmarkRef.insertAdjacentHTML('beforeend', exampleTemplate(city));
  }
};
