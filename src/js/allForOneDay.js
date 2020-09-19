import templateWeatherOneDay from './oneDayTemplate';
import dateBlock from './createDateBlock';
import getBackground from './backgroundImage';
import refs from './refs';
import { bookmarks } from './bookmarks';

const allForOne = city => {

  for (let bookmark of refs.bookmarkRef.children) {
    if (bookmark.classList.contains('orange'))
      bookmark.classList.remove('orange');
  }
  templateWeatherOneDay(city);
  dateBlock(city);
  getBackground(city['name']);
  document.getElementById('cityInput').value = city['name'];
  
  if (bookmarks.includes(city['name'])) {
    for (let bookmark of refs.bookmarkRef.children) {
      if (bookmark.textContent === city['name'])
        bookmark.classList.add('orange');
    }
  }
};

export default allForOne;
