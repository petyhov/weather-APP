import './sass/main.scss';
import './js/commentSection.js';

import './js/slick.js';
import { defaultCity } from './js/defaultCity.js';
import { handleInput } from './js/input.js';
import { getByGeolocation } from './js/geolocationFunc.js';
import refs from './js/refs.js';
import {
  preloader,
  getGeo,
} from './js/preloader.js';

getGeo()
  .then(location => {
    preloader();
    refs.mainRef.classList.remove('main-section');
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    getByGeolocation({ lat, lon });
    preloader();
    handleInput();
  })
  .catch(error => {
    preloader();
    refs.mainRef.classList.remove('main-section');
    defaultCity();
    handleInput();
  });
