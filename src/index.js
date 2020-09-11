import './sass/main.scss';
import './js/commentSection';
import './js/input.js';


import {defaultCity} from './js/defaultCity.js';
import {handleInput} from './js/input.js';
import {getByGeolocation} from './js/geolocationFunc.js';


const onSuccess = position =>{
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
   return getByGeolocation(lat, lon);
}

navigator.geolocation.getCurrentPosition(onSuccess, defaultCity)

defaultCity();
handleInput();

