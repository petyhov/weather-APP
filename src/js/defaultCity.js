import forecastData from './fetchWeatherData.js';
import get5dayobj from './create5dayObj';
import allForOneDay from './allForOneDay';
import allForFiveDay from './allForFiveDay';
import { getCaruselDay } from './slick.js';
import { preloaderOff } from './preloader';

export function defaultCity() {
  let searchValue = 'london';

  forecastData.getForecast(searchValue).then(city => {
    allForOneDay(city);
  });
  forecastData.getForecastFiveDays(searchValue).then(city => {
    let objOf5day = get5dayobj(city);
    allForFiveDay(objOf5day);
    preloaderOff();
    // getCaruselDay();
  });
}
