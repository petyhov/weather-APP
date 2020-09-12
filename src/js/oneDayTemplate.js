import getData from './fetchWeatherData';
import refs from './refs';

const weatherOneDay = searchValue => {
  getData.getForecast(searchValue).then(data => {
    refs.locationWeather.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    refs.locationName.textContent = data.name;
    refs.todayTemperature.textContent = Math.round(data.main.temp);
    refs.todayMinTemperature.textContent = Math.round(data.main.temp_min);
    refs.todayMaxTemperature.textContent = Math.round(data.main.temp_max);
  });
};

export default weatherOneDay;