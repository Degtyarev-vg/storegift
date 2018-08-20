'use strict';

$(function() {

  $('.section-like__slider').slick({
    infinite: true,
    fade: false,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    dots: false,
    adaptiveHeight: false,
    arrows: true,
    appendArrows: $('.section-like__navigation'),
    prevArrow: '<span class=\'section-like__prev\'></span>',
    nextArrow: '<span class=\'section-like__next\'></span>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

});
