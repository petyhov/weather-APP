import forecastData from './fetchWeatherData.js';
import refs from './refs.js';
import { groupByDate } from './groupByDateFunction.js';
import dateBlock from './createDateBlock.js';
import templateOneDay from '../handlebars/oneDayOfFiveDay.hbs';
import getObj from './create5dayObj';
import { moreInfo } from './oneHourTemplate.js';



export function getByGeolocation({lat, lon}) {
  //Блок з датою, світанком та заходом сонця
    forecastData.getForecastByCurrentPosition({lat, lon}).then(city => {
      dateBlock(city);
      refs.locationWeather.src = `https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`;
      refs.locationName.textContent = `${city.name}, ${city.sys.country}`;
      refs.todayTemperature.textContent = Math.round(city.main.temp);
      refs.todayMinTemperature.textContent = Math.round(city.main.temp_min);
      refs.todayMaxTemperature.textContent = Math.round(city.main.temp_max);
    });
  
    // Блок з прогнозом погоди на 5 днів
    
    forecastData.getForecastFiveDaysByCurrentPosition({lat, lon}).then(forecast => {
      const arrData = forecast.list;
      const newArr = groupByDate(arrData);
      newArr.length = 5;
      newArr.map(el => {
        let value;
        for (value of el) {
          Object.values(...newArr[0])[1];
        }
    });

// Блок з прогнозом погоди на 5 днів

forecastData.getForecastFiveDays('Vinnytsia').then(forecast => {
  const objWithWeather = getObj(forecast);
  console.log(forecast);
  document
    .querySelector('.five-day-section__list').innerHTML = '';
  document
    .querySelector('.five-day-section__list')
    .insertAdjacentHTML('beforeend', templateOneDay(objWithWeather));
  moreInfo(objWithWeather);})
  });
  
  };
    