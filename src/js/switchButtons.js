import refs from './refs.js';

document.addEventListener('DOMContentLoaded', handleSwitchButtons);
refs.todayRef.addEventListener('click', handleTodayBtn);
refs.moreDaysRef.addEventListener('click', handleMoreDaysBtn);

function handleSwitchButtons() {
  refs.todayRef.classList.add('ative-btn');
  refs.moreDaysRef.classList.add('disactive-btn');
  refs.fiveDaysSectionRef.classList.add('visually-hidden');
}

function handleTodayBtn() {
  refs.todayRef.classList.remove('disactive-btn');
  refs.todayRef.classList.add('active-btn');
  refs.moreDaysRef.classList.remove('active-btn');
  refs.moreDaysRef.classList.add('disactive-btn');
  refs.fiveDaysSectionRef.classList.add('visually-hidden');
  refs.dataBlockRef.classList.remove('visually-hidden');
  refs.oneDaySectionTableRef.classList.remove('visually-hidden');
  refs.commentsSectionRef.classList.remove('visually-hidden');
}

function handleMoreDaysBtn() {
  refs.todayRef.classList.add('disactive-btn');
  refs.moreDaysRef.classList.remove('disactive-btn');
  refs.moreDaysRef.classList.add('active-btn');
  refs.fiveDaysSectionRef.classList.remove('visually-hidden');
  refs.dataBlockRef.classList.add('visually-hidden');
  refs.oneDaySectionTableRef.classList.add('visually-hidden');
  refs.commentsSectionRef.classList.add('visually-hidden');
}

refs.closeMoreInfoRef.addEventListener('click', () => {
  refs.closeMoreInfoRef.classList.remove('active-hourly-weather-close');
  refs.listHourRef.classList.add('visually-hidden');
});
