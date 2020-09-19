import { moreInfo } from './oneHourTemplate.js';
import templateOneDay from '../handlebars/oneDayOfFiveDay.hbs';
import { preloaderOff } from './preloader';


const allForFiveDay = city => {
  document.querySelector('.five-day-section__list').innerHTML = '';

  document
    .querySelector('.five-day-section__list')
    .insertAdjacentHTML('beforeend', templateOneDay(city));
  moreInfo(city);
  preloaderOff();
};

export default allForFiveDay;
