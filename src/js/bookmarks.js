import refs from './refs';
import { cityValidationAddBookmark } from './cityValidation';
import { getCarusel } from './temp/slick.js';
import forecastData from './fetchWeatherData.js';
import allForOneDay from './allForOneDay';
import allForFiveDay from './allForFiveDay';
import get5dayobj from './create5dayObj';
import { preloaderOn } from './preloader';

export let bookmarks = [];

const exampleTemplate = bookmark => {
  return `<li class="bookmarks__item">${bookmark}<button class="bookmarkcCloseBtn"></button></li>`;
};

const downloadBookmarks = () => {
  if (localStorage.getItem('city')) {
    bookmarks = JSON.parse(localStorage.getItem('city'));
    const bookmarksTemplate = bookmarks
      .map(bookmark => exampleTemplate(bookmark))
      .map(item => refs.bookmarkRef.insertAdjacentHTML('beforeend', item));
  }
  if (bookmarks.length >= 2) {
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

refs.bookmarkBtnRef.addEventListener('click', () => {
  const searchValue = refs.inputRef.search.value;
  cityValidationAddBookmark(searchValue);
  // location.reload();
  refs.inputRef.search.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  downloadBookmarks();

  refs.bookmarkRef.addEventListener('click', e => {
    if (Object.values(e.target.classList).includes('bookmarkcCloseBtn')) {
      e.target.parentElement.remove();
      const value = e.target.parentElement.textContent;
      bookmarks = JSON.parse(localStorage.getItem('city'));
      bookmarks.map(el => {
        if (value === el) {
          const index = bookmarks.indexOf(el);
          bookmarks.splice(index, 1);
          localStorage.setItem('city', JSON.stringify(bookmarks));
        }
      });
    }
    if (Object.values(e.target.classList).includes('bookmarks__item')) {
      preloaderOn();
      const searchValue = e.target.textContent;
      forecastData.getForecast(searchValue).then(city => {
        allForOneDay(city);
      });
      forecastData.getForecastFiveDays(searchValue).then(city => {
        let objOf5day = get5dayobj(city);
        allForFiveDay(objOf5day);
        // getCaruselInput();
      });
    }
  });
});
