import refs from './refs';

export const preloaderOn = () => {
  refs.preloaderRef.classList.remove('none');
  refs.weatherBlock.classList.add('none');
};

export const preloaderOff = () => {
  setTimeout(() => {
    refs.preloaderRef.classList.add('none');
    refs.weatherBlock.classList.remove('none');
  }, 2000);
};
