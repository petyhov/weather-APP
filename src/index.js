import './sass/main.scss';
import './js/commentSection.js';
import './js/input.js';

import './js/slick';
import {defaultCity} from './js/defaultCity.js';
import {handleInput} from './js/input.js';
import {getByGeolocation} from './js/geolocationFunc.js';

function getGeolocation(){
    return new Promise((getByGeolocation, defaultCity)=>{
        navigator.geolocation.getCurrentPosition(getByGeolocation,defaultCity);
    })
}

getGeolocation().then(location=>{
    const lat = location.coords.latitude;
    const lon = location.coords.longitude;
    getByGeolocation({lat, lon});
}).catch(error=>{
    console.log(error);
});

defaultCity();
handleInput();
