import './sass/main.scss';
import './js/commentSection.js';
import './js/input.js';

import './js/slick';
import { defaultCity } from './js/defaultCity.js';
import { handleInput } from './js/input.js';
import { getByGeolocation } from './js/geolocationFunc.js';
import refs from './js/refs.js';

function preloader() {
  refs.preloaderRef.classList.add('preload-container');

  setTimeout(() => {
    refs.preloaderRef.classList.remove('preload-container');
  }, 2000);
}
document.addEventListener('DOMcontentLoaded', preloader());

function getGeolocation() {
  return new Promise((getByGeolocation, defaultCity) => {
    navigator.geolocation.getCurrentPosition(getByGeolocation, defaultCity);
  });
}

getGeolocation()
  .then(location => {
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    getByGeolocation({ lat, lon });
    refs.weatherBlock.style.backgroundImage = `url(https://www.myvin.com.ua/uploads/article/img_large/9636/52e1557de4d39a15d92a2ef33a9cd545.jpeg)`;
  })
  .catch(error => {
    console.log(error);
  });

defaultCity();
handleInput();
