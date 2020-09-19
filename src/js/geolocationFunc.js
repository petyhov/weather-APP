import forecastData from './fetchWeatherData.js';
import get5dayobj from './create5dayObj';
import allForFiveDay from './allForFiveDay';
import allForOneDay from './allForOneDay';
import { getCaruselDay, getCaruselHour } from './slick.js';
import refs from './refs.js';
import { preloaderOff } from './preloader.js';

export function getByGeolocation({ lat, lon }) {
  forecastData.getForecastByCurrentPosition({ lat, lon }).then(city => {
    allForOneDay(city);
  });
preloaderOff();
refs.moreDaysRef.addEventListener('click', ()=>{
  forecastData.getForecastFiveDaysByCurrentPosition({ lat, lon }).then(city => {
    let objOf5day = get5dayobj(city);
    allForFiveDay(objOf5day);
    getCaruselDay();  
})
  });

}
