import forecastData from './fetchWeatherData.js';
import refs from './refs.js';
import { groupByDate } from './groupByDateFunction.js';
import dateBlock from './createDateBlock.js';
import templateOneDay from '../handlebars/oneDayOfFiveDay.hbs';

export function getByGeolocation({lat, lon}) {
  //Блок з датою, світанком та заходом сонця
    forecastData.getForecastByCurrentPosition({lat, lon}).then(city => {
      dateBlock(city);
      refs.locationWeather.src = `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`;
      refs.locationName.textContent = city.name;
      refs.todayTemperature.textContent = Math.round(city.main.temp);
      refs.todayMinTemperature.textContent = Math.round(city.main.temp_min);
      refs.todayMaxTemperature.textContent = Math.round(city.main.temp_max);
    });
  
    // Блок з прогнозом погоди на 5 днів
  
    forecastData.getForecastFiveDaysByCurrentPosition({lat, lon}).then(forecast => {
      const arrData = forecast.list;
      const newArr = groupByDate(arrData);
      newArr.length = 5;
      let arrWithWeather = [];
      newArr.map(el => {
        let value;
        for (value of el) {
          Object.values(...newArr[0])[1];
        }
        const dateOfFiveDays = {
          day: new Date(value.dt * 1000).toLocaleString('en', {
            weekday: 'long',
          }),
          date: new Date(value.dt * 1000).getDate(),
          month: new Date(value.dt * 1000).toLocaleString('en', {
            month: 'short',
          }),
          weather: value.weather[0].icon,
          minTemperature: value.main.temp_min,
          maxTemperature: value.main.temp_max,
          forecast: [
            {
              time:
                new Date(value.dt * 1000).getUTCHours() +
                new Date(value.dt * 1000).getUTCMinutes(),
              weather: value.weather[0].icon,
              pressure: value.main.pressure,
              humidity: value.main.humidity,
              wind: value.wind.speed,
            },
          ],
        };
        arrWithWeather.push(dateOfFiveDays);
      });
    });
    document.querySelector('.five-day-section__list').innerHTML = '';
    document
      .querySelector('.five-day-section__list')
      .insertAdjacentHTML('beforeend', templateOneDay(arrWithWeather));
  
  };
    