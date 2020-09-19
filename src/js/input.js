import allForOneDay from './allForOneDay';
import allForFiveDay from './allForFiveDay';
import get5dayobj from './create5dayObj';
import refs from './refs';
import forecastData from './fetchWeatherData.js';
import { preloaderOff, preloaderOn } from './preloader';
import { getCarusel, getCaruselInput } from './slick.js';
import { error } from '@pnotify/core';

refs.inputRef.addEventListener('submit', e => {
  e.preventDefault();
  preloaderOn();
  const searchValue = e.currentTarget.elements.search.value;

  forecastData.getForecast(searchValue).then(city => {
    if (city['cod'] === '404' || !searchValue) {
      error({ title: 'Oh No!', text: 'Wrong city!' })
    }else{
      allForOneDay(city);
    }

    preloaderOff();


  
refs.moreDaysRef.addEventListener('click', ()=>{
  forecastData.getForecastFiveDays(searchValue).then(city => {
      let objOf5day = get5dayobj(city);
      allForFiveDay(objOf5day);
      getCaruselInput();
    })});
});
})