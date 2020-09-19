import refs from './refs';

const templateWeatherOneDay = obj => {
  refs.locationWeather.src = `https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
  refs.locationName.textContent = `${obj.name}, ${obj.sys.country}`;
  refs.todayTemperature.textContent = Math.round(obj.main.temp);
  refs.todayMinTemperature.textContent = Math.round(obj.main.temp_min);
  refs.todayMaxTemperature.textContent = Math.round(obj.main.temp_max);
};

export default templateWeatherOneDay;
