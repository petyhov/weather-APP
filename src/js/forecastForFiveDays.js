import getObj from './create5dayObj';
import templateOneDay from '../handlebars/oneDayOfFiveDay.hbs';
import { moreInfo } from './oneHourTemplate.js';
import forecastData from './fetchWeatherData.js';
import {getCaruselDay} from './slick-carus.js';

export function fiveDaysForecast (searchValue){
forecastData.getForecastFiveDays(searchValue).then(forecast => {
    const objWithWeather = getObj(forecast);
    document.querySelector('.five-day-section__list').innerHTML = '';
    document
      .querySelector('.five-day-section__list')
      .insertAdjacentHTML('beforeend', templateOneDay(objWithWeather));
      getCaruselDay();
    moreInfo(objWithWeather);
  });}
