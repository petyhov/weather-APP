import refs from './refs.js';
import './fetchWeatherData.js';
import forecastData from './fetchWeatherData.js';
import dateBlock from './createDateBlock.js';
import { groupByDate } from './groupByDateFunction.js';
import oneDayTemplate from './oneDayTemplate';
import backImg from './backgroundImage.js';
import { bookmarks, downloadBookmarks, updateBookmarks } from './bookmarks';
export function handleInput(){
refs.inputRef.addEventListener('submit', e => {
  e.preventDefault();
  const searchValue = e.currentTarget.elements.search.value;
  //Блок з датою, світанком та заходом сонця

  oneDayTemplate(searchValue);
  forecastData.getForecast(searchValue).then(city => {
    forecastData.request = searchValue;
    dateBlock(city);
  });

  // Блок з прогнозом погоди на 5 днів

  forecastForFiveDays.getForecastFiveDays(searchValue).then(forecast => {
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
    backImg.getImage(searchValue).then(image => {
      const randomImage =
        image[Math.floor(Math.random() * image.length)].largeImageURL;
      console.log(
        (refs.weatherBlock.style.backgroundImage = `url(${randomImage})`),
      );
    }),
  );
});

document.getElementById('star').addEventListener('click', () => {
  const searchValue = refs.inputRef.search.value;
  if (searchValue) {
    updateBookmarks(searchValue);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  downloadBookmarks();
});
}