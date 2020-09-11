import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';

const getCarusel = (element1, element2) => {
  $(element1).slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  $(element2).slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
};

export default getCarusel;
