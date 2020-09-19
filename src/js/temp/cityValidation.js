import forecastData from './fetchWeatherData.js';
import { updateBookmarks } from './bookmarks';
import { error } from '@pnotify/core';
export const cityValidationAddBookmark = searchValue => {
  forecastData.getForecast(searchValue).then(data => {
    if (data['cod'] === '404' || !searchValue) {
      error({ title: 'Oh No!', text: 'Enter city!' })
    } else {
      updateBookmarks(searchValue);
    }
  });
};
