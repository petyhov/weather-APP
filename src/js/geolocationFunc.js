import forecastData from './fetchWeatherData.js';
import refs from './refs.js';
import oneDayTemplate from './oneDayTemplate';
import { groupByDate } from './groupByDateFunction.js';
import dateBlock from './createDateBlock.js';
import backImg from './backgroundImage.js';

export function getByGeolocation({lat, lon}) {
  //Блок з датою, світанком та заходом сонця
    oneDayTemplate();
    forecastData.getForecastByCurrentPosition({lat, lon}).then(city => {
      dateBlock(city);
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
        const randomImage =
          image[Math.floor(Math.random() * image.length)].largeImageURL;
        console.log(
          (refs.weatherBlock.style.backgroundImage = `url(${randomImage})`),
        );
      }),
    );;
    }