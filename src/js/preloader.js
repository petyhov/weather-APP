import refs from './refs.js';

export function preloader() {
    refs.preloaderRef.classList.add('preload-container');
  
    setTimeout(() => {
      refs.preloaderRef.classList.remove('preload-container');
    }, 2000);
  }

  export function getGeo() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }