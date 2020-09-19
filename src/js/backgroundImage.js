import { error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import refs from './refs';

const findImg = {
  keyApi: '17975511-a1a75a89facdad63fcb9c5ee1',

  getImage(request) {
    const baseURL = 'https://pixabay.com/api/';
    const params = `?image_type=photo&orientation=horizontal&q=${request}&key=${this.keyApi}`;
    return fetch(baseURL + params)
      .then(resp => resp.json())
      .then(images => images.hits)
      .catch(err => err);
  },
};

const getImg = searchValue => {
  findImg.getImage(searchValue).then(image => {
    if (image.length !== 0) {
      // error({ title: 'Sorry!', text: 'The picture is not uploaded!' });
      const randomImage =
      image[Math.floor(Math.random() * image.length)].largeImageURL;
    refs.weatherBlock.style.backgroundImage = `url(${randomImage})`;
    }
    // const randomImage =
    //   image[Math.floor(Math.random() * image.length)].largeImageURL;
    // refs.weatherBlock.style.backgroundImage = `url(${randomImage})`;
  });
};

export default getImg;
