import hourlyTemplate from '../handlebars/oneHourlyForecast.hbs';
import { getCaruselHour } from './slick.js';

export const moreInfo = obj => {
  document
    .querySelector('.five-day-section__list')
    .addEventListener('click', e => {
        // console.log(e.currentTarget);

      if (
        Object.values(e.target.classList).includes('five-day-section__item')
      ) {
        let link = document.querySelector('.item__hour');
        let index = e.target.dataset.index;
        link.innerHTML = '';
        link.insertAdjacentHTML(
          'beforeend',
          hourlyTemplate(obj[index]['time']),
        );
        getCaruselHour();
      }
    });
};
