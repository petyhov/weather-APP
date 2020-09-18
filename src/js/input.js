import refs from './refs.js';
import './fetchWeatherData.js';
import forecastData from './fetchWeatherData.js';
import dateBlock from './createDateBlock.js';
import oneDayTemplate from './oneDayTemplate';
import backImg from './backgroundImage.js';
import { error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { fiveDaysForecast } from './forecastForFiveDays.js';
import { preloader } from './preloader.js';
import './bookmarks.js';
import {getCaruselInput} from './slick-carus.js';

export function handleInput() {
  refs.inputRef.addEventListener('submit', e => {
    e.preventDefault();
    preloader();
    const searchValue = e.currentTarget.elements.search.value;
    //Блок з датою, світанком та заходом сонця
    oneDayTemplate(searchValue);
    forecastData.getForecast(searchValue).then(city => {
      if (city['cod'] === '404' || !searchValue) {
        error({ title: 'NOTICE!', text: "Can't show such city!" });
      } else {
        dateBlock(city);
      }
    });

    // Блок з прогнозом погоди на 5 днів
    fiveDaysForecast(searchValue);
    getCaruselInput();
    // Додавання рандомної картинки на бекграунд

    console.log(
      backImg.getImage(searchValue).then(image => {
        if (image.length === 0) {
          error({ title: 'Sorry!', text: 'The picture is not uploaded!' });
        }
        const randomImage =
          image[Math.floor(Math.random() * image.length)].largeImageURL;
        console.log(
          (refs.weatherBlock.style.backgroundImage = `url(${randomImage})`),
        );
      }),
    );
  });
}
