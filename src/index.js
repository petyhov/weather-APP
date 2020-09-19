import './sass/main.scss';
import { getByGeolocation } from './js/geolocationFunc';
import { defaultCity } from './js/defaultCity';
import './js/input';
import './js/commentSection.js';
import './js/bookmarks';
import './js/switchButtons';
import { preloaderOn } from './js/preloader';

function getGeo() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

getGeo()
  .then(location => {
    document.getElementById('main-id').classList.remove('main-section-none');
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    getByGeolocation({ lat, lon });
    preloaderOn();
  })
  .catch(error => {
    document.getElementById('main-id').classList.remove('main-section-none');
    preloaderOn();
    defaultCity();
  });
