import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.js';

export function getCarusel(element){
  $(element).slick({
    infinite: false,
    draggable: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
            {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },]
    });
  };

  export function getCaruselDay(){
    $('.five-day-section__list').not('.slick-initialized').slick({
      infinite: false,
      draggable: false,
      prevArrow: $('.five-day-section-prev__btn'),
      nextArrow: $('.five-day-section-next__btn'),
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },]
      });
    };

    export function getCaruselInput(){
      $('.input-list').not('.slick-initialized').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },]
        });
      };


      export function getCaruselHour(){
        $('.item__hour').not('.slick-initialized').slick({
          infinite: false,
          draggable: false,
          slidesToShow: 7,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: false,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },]
          });
        };
    