import forecastData from './fetchWeatherData.js';
import refs from './refs.js';
import { groupByDate } from './groupByDateFunction.js';
import dateBlock from './createDateBlock.js';
import { fiveDaysForecast } from './forecastForFiveDays.js';
import {getCaruselDay} from './slick-carus.js';




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

fiveDaysForecast('Vinnytsia');

getCaruselDay();
  })};
    