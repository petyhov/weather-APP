export default {
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