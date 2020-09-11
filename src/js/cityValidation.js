import forecastData from './fetchWeatherData.js';
import { updateBookmarks } from './bookmarks';
export const cityValidationAddBookmark = searchValue => {
  forecastData.getForecast(searchValue).then(data => {
    if (data['cod'] === '404' || !searchValue) {
    } else {
      updateBookmarks(searchValue);
    }
  });
};
