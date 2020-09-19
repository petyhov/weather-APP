import templateWeatherOneDay from './oneDayTemplate';
import dateBlock from './createDateBlock';
import getBackground from './backgroundImage';
import refs from './refs';
import { bookmarks } from './bookmarks';

const allForOne = city => {

  templateWeatherOneDay(city);
  dateBlock(city);
  getBackground(city['name']);
  document.getElementById('cityInput').value = city['name'];
  
  if (bookmarks.includes(city['name'])) {
    for (let bookmark of refs.bookmarkRef.children) {
    if(refs.inputRef.textContent === bookmark.textContent || city['name']){
      refs.bookmarkBtnRef.classList.add('orange');
    } 
  }
}else {
  refs.bookmarkBtnRef.classList.remove('orange');
};

};

export default allForOne;