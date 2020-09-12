import forecastData from './fetchWeatherData.js';
import refs from './refs.js';
import { groupByDate } from './groupByDateFunction.js';
import dateBlock from './createDateBlock.js';
import backImg from './backgroundImage.js';

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
      });
    });
  
  
    // Додавання рандомної картинки на бекграунд
  
    console.log(
      backImg.getImage().then(image => {
        const randomImage = image[Math.floor(Math.random() * image.length)].largeImageURL;
          refs.weatherBlock.style.backgroundImage = `url(https://www.myvin.com.ua/uploads/article/img_large/9636/52e1557de4d39a15d92a2ef33a9cd545.jpeg)`;
        
      }));
};
    