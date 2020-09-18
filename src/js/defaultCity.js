import forecastData from './fetchWeatherData.js';
import refs from './refs.js';
import oneDayTemplate from './oneDayTemplate';
import { groupByDate } from './groupByDateFunction.js';
import dateBlock from './createDateBlock.js';
import backImg from './backgroundImage.js';
import { fiveDaysForecast } from './forecastForFiveDays.js';
import {getCaruselDay} from './slick-carus.js';

export function defaultCity() {
  //Блок з датою, світанком та заходом сонця
  const searchValue = 'london';
  oneDayTemplate(searchValue);
  forecastData.getForecast(searchValue).then(city => {
    dateBlock(city);
  });

  // Блок з прогнозом погоди на 5 днів

  forecastData.getForecastFiveDays(searchValue).then(forecast => {
    const arrData = forecast.list;
    const newArr = groupByDate(arrData);
    newArr.length = 5;

    newArr.map(el => {
      let value;
      for (value of el) {
        Object.values(...newArr[0])[1];
      }
      // Блок з прогнозом погоди на 5 днів
      fiveDaysForecast(searchValue);

      getCaruselDay();
    });
  });

  // Додавання рандомної картинки на бекграунд

  backImg.getImage(searchValue).then(image => {
    const randomImage =
      image[Math.floor(Math.random() * image.length)].largeImageURL;
    return (refs.weatherBlock.style.backgroundImage = `url(${randomImage})`);
  });
}
