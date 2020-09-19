import allForOneDay from './allForOneDay';
import allForFiveDay from './allForFiveDay';
import get5dayobj from './create5dayObj';
import refs from './refs';
import forecastData from './fetchWeatherData.js';
import { preloaderOn } from './preloader';
import { getCaruselInput } from './slick.js';

refs.inputRef.addEventListener('submit', e => {
  e.preventDefault();
  preloaderOn();
  const searchValue = e.currentTarget.elements.search.value;
  forecastData.getForecast(searchValue).then(city => {
    allForOneDay(city);
  });

  forecastData.getForecastFiveDays(searchValue).then(city => {
    let objOf5day = get5dayobj(city);
    allForFiveDay(objOf5day);

    // getCaruselInput();
  });
});
