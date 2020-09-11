import refs from './refs.js';
export default function dateBlock(city) {
    const date = new Date(city.dt*1000).getDate();
    const day = new Date(city.dt*1000).toLocaleString('en', {weekday: 'short'});
    const month = new Date(city.dt*1000).toLocaleString('en', {month: 'long'});
    const hours = new Date(city.dt*1000).getHours();
    const minutes = new Date(city.dt*1000).getMinutes();
    const seconds = new Date(city.dt*1000).getSeconds();
    const sunriseHours = new Date(city.sys.sunrise).getHours();
    const sunriseMinutes = new Date(city.sys.sunrise).getMinutes();
    const sunsetHours = new Date(city.sys.sunset).getHours();
    const sunsetMinutes = new Date(city.sys.sunset).getMinutes(); 
    refs.dataBlockRef.innerHTML = `<p class="data__day">${date}th ${day}</p>
    <div class="data__wrapper">
        <div class="data__day--month">
            <span class="month">${month}</span>
            <span class="time">${hours}:${minutes}:${seconds}</span>
        </div>
        <div class="data__sun">
            <div class="sunrise">
                <img src="" alt="sunrise" class="sunrise__icon">
                <span class="sunrise__time">${sunriseHours}:${sunriseMinutes}</span>
            </div>
            <div class="sunset">
                <img src="" alt="sunset" class="sunset__icon">
                <span class="sunset__time">${sunsetHours}:${sunsetMinutes}</span>
            </div>
        </div>
    </div>`;
}