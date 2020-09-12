import refs from './refs.js';
let blockTimer;
function dateBlock(city) {
  clearInterval(blockTimer);
   blockTimer = setInterval(() => {
    const date = new Date();
    const localUTCTime = date.getTime() + +date.getTimezoneOffset() * 60000;
    const timeDifference = localUTCTime + city.timezone * 1000;
    const momentTime = new Date(timeDifference);
    const getSunriseTime = new Date(city.sys.sunrise*1000).getTime() + +new Date(city.sys.sunrise*1000).getTimezoneOffset()*60000 + +city.timezone *1000;
    const currentSunrise = new Date (getSunriseTime);
    const getSunsetTime = new Date(city.sys.sunset*1000).getTime() + +new Date(city.sys.sunset*1000).getTimezoneOffset()*60000 + +city.timezone *1000;
    const currentSunset = new Date(getSunsetTime);
    refs.currentDateRef.innerHTML = momentTime.getDate() +'<sup>th</sup>' + momentTime.toLocaleString('en', { weekday: 'short' });
    refs.monthRef.innerHTML = momentTime.toLocaleString('en', {month: 'long',});
    refs.currentTimeRef.innerHTML = pad(momentTime.getHours()) +':'+pad(momentTime.getMinutes()) + ':'+pad(momentTime.getSeconds());
    refs.sunriseRef.innerHTML = pad(currentSunrise.getHours())+':' + pad(currentSunrise.getMinutes());
    refs.sunsetRef.innerHTML = pad(currentSunset.getHours())+':' + pad(currentSunset.getMinutes());pad(currentSunset.getMinutes());
  }, 1000);
  function pad(value) {
    return String(value).padStart(2, '0');
  }
}
export default dateBlock;
