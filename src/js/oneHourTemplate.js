import refs from './refs';
import hourlyTemplate from '../handlebars/oneHourlyForecast.hbs';

export const moreInfo = obj => {
  document;
  refs.fiveDaysListRef.addEventListener('click', e => {
    if (Object.values(e.target.classList).includes('five-day-section__item')) {
      refs.closeMoreInfoRef.classList.add('active-hourly-weather-close');
      refs.listHourRef.classList.remove('visually-hidden');
      let link = document.querySelector('.list__hour');
      let index = e.target.dataset.index;
      link.innerHTML = '';
      link.insertAdjacentHTML('beforeend', hourlyTemplate(obj[index]['time']));
    }
  });
};
